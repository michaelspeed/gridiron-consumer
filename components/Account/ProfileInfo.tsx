import React, {useEffect, useState} from "react"
import {observer} from "mobx-react";
import {useStore} from "../../store/store";
import {useMutation} from "@apollo/client";
import {UpdateAccountInfoDocument} from "../../gql";
import {message, Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ProfileInfo = () => {

    const {user} = useStore(null)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [loading, setLoading] = useState(false)

    const [UpdateAccountInfo] = useMutation(UpdateAccountInfoDocument, {
        variables: {
            lname,
            fname,
            phone
        }
    })

    useEffect(() => {
        if (user) {
            setFname(user.firstName)
            setLname(user.lastName)
            setPhone(user.phone)
            setEmail(user.email)
        }
    }, [user])

    return (
        <React.Fragment>
            <div className="myaccount-content">
                <h3>Account Details</h3>
                {user && <div className="account-details-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="first-name" className="required">First Name</label>
                                    <input type="text" id="first-name" value={fname} onChange={event => setFname(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="last-name" className="required">Last Name</label>
                                    <input type="text" id="last-name" value={lname} onChange={event => setLname(event.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="phone-number" className="required">Phone Number</label>
                            <input type="text" id="phone-number" value={phone} onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="email" className="required">Email Address</label>
                            <input type="email" id="email" value={email} disabled={true}/>
                        </div>
                        <div className="single-input-item">
                            {loading && <Spin indicator={antIcon} />}
                            {!loading && <button className="check-btn sqr-btn " onClick={(e) => {
                                e.preventDefault()
                                setLoading(true)
                                UpdateAccountInfo()
                                    .then(() => {
                                        if (isNaN(parseInt(phone))) {
                                            message.error('Phone Number should be a number')
                                            return
                                        }
                                        message.success('Profile Updated')
                                        setLoading(false)
                                    })
                                    .catch(error => {
                                        message.error(error.message)
                                    })
                            }}>Save Changes</button>}
                        </div>
                        <fieldset>
                            <legend>Password change</legend>
                            <div className="single-input-item">
                                <label htmlFor="current-pwd" className="required">Current Password</label>
                                <input type="password" id="current-pwd"/>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-input-item">
                                        <label htmlFor="new-pwd" className="required">New Password</label>
                                        <input type="password" id="new-pwd"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-input-item">
                                        <label htmlFor="confirm-pwd" className="required">Confirm Password</label>
                                        <input type="password" id="confirm-pwd"/>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="single-input-item">
                            <button className="check-btn sqr-btn ">Change Password</button>
                        </div>
                    </form>
                </div>}
            </div>
        </React.Fragment>
    )
}

export default observer(ProfileInfo)
