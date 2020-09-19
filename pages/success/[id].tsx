import React from "react";
import {GetDefaultStoreDocument, GetMenuDocument, GetSingleOrderDocument, Store} from "../../gql";
import {initializeStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import {DateTime} from "luxon";
import Layout from "../../components/Layout";
import {CheckOutlined} from "@ant-design/icons";
import withApollo from "../../utils/withApollo";

interface Props {
    id: string,
    menu: any,
    store: Store,
    order: any
}

const Success = ({menu, store, order}: Props) => {
    return (
        <React.Fragment>
            <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu} store={store}>
                <div className="breadcrumb-area breadcrumb-mt bg-gray breadcrumb-ptb-1" style={{marginTop: 130}}>
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <div>
                                <CheckOutlined style={{fontSize: 100}}/>
                            </div>
                            <h2>Order Placed!</h2>
                            <div>
                                <h4>₹ {order.totalPrice}</h4>
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

Success.getInitialProps = async (ctx) => {
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

export default withApollo(Success)
