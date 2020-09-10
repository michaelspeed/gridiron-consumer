import useScripts from "../../utils/useScript";
import withApollo from "../../utils/withApollo";
import Layout from "../../components/Layout";
import React from "react";
import {GetDefaultStoreDocument, GetMenuDocument} from "../../gql";
import {initializeStore, useStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";

interface Props {
    menu: any
    store: any
}

const Checkout = ({menu, store}: Props) => {
    useScripts('/js/main.js')
    const {user, cart} = useStore()
    return (
        <Layout title={'AirEcommerce Checkout'} menu={menu.data.GetMenu.menu} store={store}>
            <div className="shop-area pt-160 pb-160">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="myaccount-content">
                                <div>
                                    <h3>Checkout</h3>
                                </div>
                                <div className="cart-table-content">
                                    <div className="table-content table-responsive">
                                        <table>
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
                                            <tr>
                                                <td className="cart-product">
                                                    <div className="product-img-info-wrap">
                                                        <div className="product-img">
                                                            <a href="#"><img src="assets/images/cart/cart-1.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="product-info">
                                                            <h4><a href="#">Demo Product Title</a></h4>
                                                            <span>Color :  Black</span>
                                                            <span>Size :     SL</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-price"><span className="amount">$56.00</span>
                                                </td>
                                                <td className="cart-quality">
                                                    <div className="pro-details-quality">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input className="cart-plus-minus-box plus-minus-width-inc"
                                                                   type="text" name="qtybutton" value="02"/>
                                                                <div className="inc qtybutton">+</div></div>
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>$112.00</span></td>
                                                <td className="product-remove"><a href="#">
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
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-shiping-update-wrapper">
                                        <a href="#">Continure Shopping</a>
                                        <a href="#">Update Cart</a>
                                        <a href="#">Clear Cart</a>
                                    </div>
                                </div>
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

export default withApollo(Checkout)
