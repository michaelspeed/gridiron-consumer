import {observer} from "mobx-react";
import React, {useState} from "react";
import {useStore} from "../../store/store";
import {Input, Select, Radio, Spin, message} from "antd";
import {indianState} from "../../utils/IndianStatesDistricts";
import {
    Address,
    AddressType,
    CreateNewAddressDocument,
    CreateNewAddressMutationVariables,
    GetUserAddressDocument, GetUserAddressQueryVariables
} from "../../gql";
import {useMutation, useQuery} from "@apollo/client";
import { LoadingOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AddressInfo = () => {

    const {user} = useStore()
    const [newadd, setNewAdd] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fullName, setFullName] = useState('')
    const [addressLine, setaddressLine] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [landmark, setlandmark] = useState('')
    const [postalCode, setpostalCode] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [type, setType] = useState<AddressType>(AddressType.Home)

    const [CreateNewAddress] = useMutation<any, CreateNewAddressMutationVariables>(CreateNewAddressDocument, {
        variables: {
            fullName,
            addressLine,
            city,
            state,
            landmark,
            postalCode,
            phoneNumber,
            type
        }
    })

    const {data, error, ...addLoad} = useQuery<{GetUserAddress: Address[]}, GetUserAddressQueryVariables>(GetUserAddressDocument)

    console.log(data)

    return (
        <React.Fragment>
            <div className="myaccount-content">
                <h3>Manage Addresses</h3>
                {!newadd && <div className="account-details-form">
                    <div className="single-input-item">
                        <button className="check-btn sqr-btn " onClick={(e) => {
                            e.preventDefault()
                            setNewAdd(true)
                        }}>Add New Address</button>
                    </div>
                </div>}
                {user && newadd && <div className="account-details-form">
                    <div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">Name</label>
                                    <Input placeholder="Name" value={fullName} onChange={event => setFullName(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">Phone Number</label>
                                    <Input placeholder="Phone Number" value={phoneNumber} onChange={event => setphoneNumber(event.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">Pincode</label>
                                    <Input placeholder="Pincode" value={postalCode} onChange={event => setpostalCode(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">Landmark</label>
                                    <Input placeholder="Locality" value={landmark} onChange={event => setlandmark(event.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-input-item">
                                    <label className="required">Address (Area and Street)</label>
                                    <TextArea placeholder="Address (Area and Street)" value={addressLine} onChange={event => setaddressLine(event.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">City / District / Town</label>
                                    <Input placeholder="City / District / Town" value={city} onChange={event => setcity(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">State</label>
                                    <Select style={{ width: '100%'}} size={"large"} value={state} onChange={val => setstate(val)}>
                                        {indianState.states.map(state => (
                                            <Option value={state.code}>{state.name}</Option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label className="required">Address Type</label>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Radio.Group value={type} buttonStyle={"solid"} size="large" onChange={e => setType(e.target.value)}>
                                            <Radio.Button value={AddressType.Home}>Home</Radio.Button>
                                            <Radio.Button value={AddressType.Work}>Work</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!loading && <div className="single-input-item">
                            <button className="check-btn sqr-btn "
                                    onClick={event => {
                                        setLoading(true)
                                        event.preventDefault()
                                        CreateNewAddress()
                                            .then(() => {
                                                setLoading(false)
                                                setNewAdd(false)
                                                message.success('Address Added')
                                            })
                                            .catch(error => {
                                                setLoading(false)
                                                message.error(error.message)
                                            })
                                    }}
                            >Save Address</button>
                            <a href="javascript:;" className='btn ml-5' onClick={() => setNewAdd(false)}>Cancel</a>
                        </div>}
                        {loading && <Spin indicator={antIcon} />}
                    </div>
                </div>}
                {data && <div>
                    {data!.GetUserAddress.map(adds => (
                        <div className="myaccount-content">
                            <address>
                                <p><strong>{adds.fullName}</strong>  / {adds.phoneNumber} / {adds.addressType}</p>
                                <p>{adds.addressLine} <br/>
                                    {adds.landmark} <br/>
                                    {adds.city}, {adds.state}<br/>
                                    {adds.postalCode}
                                </p>
                                <p>{adds.phoneNumber}</p>
                            </address>
                        </div>
                    ))}
                </div>}
                {addLoad.loading && <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Spin indicator={antIcon} />
                </div>}
            </div>
        </React.Fragment>
    )
}

export default observer(AddressInfo)
