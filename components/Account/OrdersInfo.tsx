import React from "react";
import withApollo from "../../utils/withApollo";
import {useQuery} from "@apollo/client";
import {GetMyOrdersDocument, Order} from "../../gql";
import {DateTime} from 'luxon'
import {useRouter} from "next/router";

const OrdersInfo = () => {

    const {data, loading, error} = useQuery(GetMyOrdersDocument)

    const navig = useRouter()

    const getItemCount = (order) => {
        let count = 0
        for (const ors of order.line) {
            count = count + 1
        }
        return count - 1
    }

    return (
        <React.Fragment>
            <div className="cart-table-content wishlist-wrap">
                <div className="table-content table-responsive">
                    <table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th className="th-text-center">Order On</th>
                            <th className="th-text-center">Price</th>
                            <th className="th-text-center">View</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.getMyOrders.map(orders => (
                            <tr key={orders.id}>
                                <td className="cart-product">
                                    <div className="product-img-info-wrap">
                                        <div className="product-info">
                                            <h4><a href="#">{orders.line[0].item.productVariant.name}</a></h4>
                                            {getItemCount(orders) !== 0 && <span>+ {getItemCount(orders)} items</span>}
                                        </div>
                                    </div>
                                </td>
                                <td className="product-price"><span className="amount">{DateTime.fromISO(orders.createdAt).toFormat('DD')}</span></td>
                                <td className="cart-quality">
                                    <span>₹ {orders.totalPrice}</span>
                                </td>
                                <td className="product-wishlist-cart"><a href="javascript:;" onClick={() => navig.push(`/orders/${orders.id}`)}>View</a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withApollo(OrdersInfo)
