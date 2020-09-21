import useScripts from "../../utils/useScript";
import withApollo from "../../utils/withApollo";
import Layout from "../../components/Layout";
import React, {useEffect, useState} from "react";
import {
    CreateShopOrderDocument, CreateShopOrderMutationVariables,
    GetCurrentUserDocument,
    GetCurrentUserQueryVariables,
    GetDefaultStoreDocument,
    GetMenuDocument, GetPaymentCodesDocument, GetPaymentCodesQueryVariables
} from "../../gql";
import {CartSSD, initializeStore, useStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import {assetsURL} from "../../utils/globalconstants";
import {Button} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@apollo/client";
import Loader from "../../components/Loader/Loader";
import {Grow} from "@material-ui/core";

interface Props {
    menu: any
    store: any
}

interface IWindow {
    Razorpay: any
}

interface IRaxor {
    razorpay_payment_id: string
}


declare var window: IWindow;

const Checkout = ({menu, store}: Props) => {

    const navig = useRouter()

    const {ResetCart} = useStore()

    const [pageState, setPageState] = useState(1)
    const [paymentMode, setPaymentMode] = useState(1)
    const [address, setAddress] = useState('')
    const [transId, setTransId] = useState('')

    useScripts('/js/main.js')
    const {user, cart, AddQuantity, RemoveQuantity, RemoveFromCart} = useStore()

    const {data, error, ...addLoad} = useQuery<any, GetCurrentUserQueryVariables>(GetCurrentUserDocument)
    const {...payCode} = useQuery<any, GetPaymentCodesQueryVariables>(GetPaymentCodesDocument)

    const [CreateOrder] = useMutation<any, CreateShopOrderMutationVariables>(CreateShopOrderDocument, {
        variables:{
            address,
            transaction: transId === '' ? undefined : transId,
            orderLineDto: cart.map(item => ({priceId: item.price.id, quantity: item.quantity}))
        }
    })

    const getTotalAmount = () => {
        let amount = 0
        for (let prod of cart) {
            amount = amount + (Number(prod.price.price) * prod.quantity)
        }
        return amount
    }

    useEffect(() => {
        if (pageState === 4) {
            CreateOrder().then(value => {
                localStorage.removeItem(CartSSD)
                ResetCart()
                navig.push(`/success/${value.data.createShopOrder.id}`)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [pageState, paymentMode])

    return (
        <Layout title={store.storeName} menu={menu.data.GetMenu.menu} store={store}>
            <div className="shop-area pt-160 pb-160">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="myaccount-content">
                                <div>
                                    <h3>Cart</h3>
                                </div>
                                <React.Fragment>
                                    {pageState === 1 && <div className="cart-table-content">
                                        <div className="table-content table-responsive">
                                            {cart.length > 0 && <table>
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th className="th-text-center"> Price</th>
                                                    <th className="th-text-center">Quantity</th>
                                                    <th className="th-text-center">Total Prce</th>
                                                    <th className="th-text-center">Remove</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {cart && cart.map((item, index) => (
                                                    <tr key={item.variant.id}>
                                                        <td className="cart-product">
                                                            <div className="product-img-info-wrap">
                                                                <div className="product-img">
                                                                    <a href="#"><img src={`${assetsURL}/${item.variant.assetUrl}`}  alt="" style={{height: 150, objectFit: "contain"}}/></a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 style={{fontWeight: "bold"}}><a href="javascript:;">{item.variant.name}</a></h4>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="product-price"><span className="amount">₹ {item.price.price}</span>
                                                        </td>
                                                        <td className="cart-quality">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <Button type="default" shape="circle" icon={<MinusOutlined/>} onClick={() => RemoveQuantity(index)}/>
                                                                <span>{item.quantity}</span>
                                                                <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={() => AddQuantity(index)}/>
                                                            </div>
                                                        </td>
                                                        <td className="product-total"><span>₹ {item.price.price * item.quantity}</span></td>
                                                        <td className="product-remove">
                                                            <a href="javascript:;" onClick={() => RemoveFromCart(index)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11.314"
                                                                     height="11.314" viewBox="0 0 11.314 11.314"
                                                                     className="injected-svg inject-me">
                                                                    <g id="Group_1415" data-name="Group 1415"
                                                                       transform="translate(-1251.843 -711.843)">
                                                                        <line id="Line_10" data-name="Line 10" x2="14"
                                                                              transform="translate(1252.55 712.55) rotate(45)"
                                                                              fill="none" stroke="#cbcbcb" stroke-width="2"></line>
                                                                        <line id="Line_11" data-name="Line 11" x2="14"
                                                                              transform="translate(1252.55 722.45) rotate(-45)"
                                                                              fill="none" stroke="#cbcbcb" stroke-width="2"></line>
                                                                    </g>
                                                                </svg>
                                                            </a></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>}
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h3>Total</h3>
                                            <h4>₹ {getTotalAmount()}</h4>
                                        </div>
                                        <div className="cart-shiping-update-wrapper">
                                            <a href="javascript:;"
                                               onClick={() => navig.push('/')}
                                            >Continue Shopping</a>
                                            <a href="javascript:;" className="btn-hover cart-btn-style"
                                               onClick={() => {
                                                   setPageState(2)
                                               }}
                                            >Continue</a>
                                        </div>
                                    </div>}
                                </React.Fragment>
                                <div>
                                    <h3>Address</h3>
                                </div>
                                <React.Fragment>
                                    {pageState === 2 && <div className="cart-table-content">
                                        <div>
                                            {data!.GetCurrentUser.address.map(adds => (
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
                                                    <div className="cart-shiping-update-wrapper">
                                                        <a href="javascript:;" className="btn-hover cart-btn-style"
                                                           onClick={() => {
                                                               setAddress(JSON.stringify(adds))
                                                               setPageState(3)
                                                           }}
                                                        >Select Address</a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>}
                                </React.Fragment>
                                <div>
                                    <h3>Payment Method</h3>
                                </div>
                                <React.Fragment>
                                    {pageState === 3 && <div className="cart-table-content">
                                        <div className='row'>
                                            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                                <a href="javascript:;" className="btn-hover btn cart-btn-style"
                                                   onClick={() => {
                                                       setPageState(4)
                                                   }}
                                                ><h3>Cash On Delivery</h3></a>
                                            </div>
                                            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                                <a href="javascript:;" className="btn-hover btn cart-btn-style"
                                                   onClick={() => {
                                                       const opts = {
                                                           key: payCode.data.getPaymentCodes.api,
                                                           amount: getTotalAmount() * 100,
                                                           name: store.storeName,
                                                           theme: {
                                                               color: '#333'
                                                           },
                                                           handler: (transaction: IRaxor) => {
                                                               console.log(transaction)
                                                               setTransId(transaction.razorpay_payment_id)
                                                               setPageState(4)
                                                           }
                                                       }
                                                       const razor = window.Razorpay(opts)
                                                       razor.open()
                                                   }}
                                                ><h3>Pay Now</h3></a>
                                            </div>
                                        </div>
                                    </div>}
                                </React.Fragment>
                                <div>
                                    <h3>Processing Order</h3>
                                </div>
                                <React.Fragment>
                                    {pageState === 4 && <div className="cart-table-content">
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Loader/>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span>Processing Order ...</span>
                                        </div>
                                    </div>}
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Checkout.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const menu = await client.query({
        query: GetMenuDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })
    const store = initializeStore()
    return {
        menu,
        store: defaultStore.data.GetDefaultStore,
        initialStore: getSnapshot(store),
    }
}

export default withApollo(observer(Checkout))
