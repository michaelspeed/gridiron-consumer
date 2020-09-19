import React, {useState} from "react";
import {
    CreateReviewDocument, CreateReviewMutationVariables,
    GetDefaultStoreDocument,
    GetMenuDocument,
    GetSingleOrderDocument,
    Order,
    Store
} from "../../gql";
import {initializeStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import Layout from "../../components/Layout";
import withApollo from "../../utils/withApollo";
import {DateTime} from "luxon";
import {CloseCircleFilled, CloseCircleTwoTone, SwitcherTwoTone} from "@ant-design/icons";
import {Button, Input, Rate, Tooltip, Popover, message} from "antd";
import {useMutation} from "@apollo/client";

interface Props {
    id: string,
    menu: any,
    store: Store,
    order: any
}

const {TextArea} = Input

const Orders = ({menu, store, order}: Props) => {

    const [addr, setAddr] = useState(false)
    const [stars, setStars] = useState(0)
    const [rev, setRev] = useState('')

    const [CreateReview] = useMutation<any, CreateReviewMutationVariables>(CreateReviewDocument)

    const reviewContetn = (varId) =>  (
        <React.Fragment>
            <div style={{width: 450}}>
                <div>
                    <span>Rate The Product</span>
                </div>
                <Rate  onChange={value => setStars(value)} value={stars} />

                <div>
                    <span>Write your review</span>
                </div>
                <TextArea placeholder={'Your Review ...'} value={rev} onChange={(event) => setRev(event.target.value)}/>
                <div style={{marginTop: 20}}>
                    <Button onClick={() => {
                        CreateReview({
                            variables: {
                                varId:  varId,
                                stars,
                                text: rev
                            }
                        }).then(() => {
                            message.success('Notification Added')
                            setAddr(false)
                            setStars(0)
                            setRev('')
                        })
                            .catch(error => {
                                message.error(error.message)
                            })
                    }}>Add Review</Button>
                </div>
            </div>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu} store={store}>
                <div className="breadcrumb-area breadcrumb-mt bg-gray breadcrumb-ptb-1" style={{marginTop: 130}}>
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h2>Order #{DateTime.fromISO(order.createdAt).toFormat('DD')}</h2>
                            <div>
                                <h4>₹ {order.totalPrice}</h4>
                            </div>
                            <div>
                                Processing Mode: {order.mode}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-area bg-gray pt-50 pb-100">
                    <div className="container">
                        <div>
                            <div className="cart-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th className="th-text-center">Price</th>
                                            <th className="th-text-center">Quantity</th>
                                            <th className="th-text-center">Total Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {order.line.map(lines => (
                                            <tr>
                                                <td className="cart-product">
                                                    <div className="product-img-info-wrap">
                                                        {/*<div className="product-img">
                                                        <a href="#"><img src="assets/images/cart/cart-1.jpg" alt=""/></a>
                                                    </div>*/}
                                                        <div className="product-info">
                                                            <h4><a href="#">{lines.item.productVariant.name}</a></h4>
                                                            <div>
                                                                Status: {lines.stage}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-price"><span
                                                    className="amount">₹ {lines.priceField.price}</span></td>
                                                <td className="cart-quality">
                                                    <span>{lines.item.quantity}</span>
                                                </td>
                                                <td className="product-total">
                                                    <span>₹ {lines.priceField.price * lines.item.quantity}</span></td>
                                                <td className="product-remove">
                                                    <Tooltip title="Cancel Order">
                                                        <Button shape="circle" icon={<CloseCircleTwoTone style={{fontSize: 20}}/>} />
                                                    </Tooltip>
                                                    <Popover
                                                        content={() => reviewContetn(lines.item.productVariant.id)}
                                                        title="Add Review"
                                                        trigger="click"
                                                        visible={addr}
                                                        onVisibleChange={visible => setAddr(visible)}
                                                    >
                                                        <Tooltip title="Write Review">
                                                            <Button shape="circle" style={{marginLeft: 10}} onClick={() => setAddr(true)} icon={<SwitcherTwoTone style={{fontSize: 20}}/>} />
                                                        </Tooltip>
                                                    </Popover>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

Orders.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const id = ctx.query.id
    const menu = await client.query({
        query: GetMenuDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })

    const order = await client.query({
        query: GetSingleOrderDocument,
        variables: {
            id
        }
    })

    const store = initializeStore()

    return {
        id,
        menu,
        store: defaultStore.data.GetDefaultStore,
        initialStore: getSnapshot(store),
        order: order.data.getSingleOrder
    }
}

export default withApollo(Orders)
