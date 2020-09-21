import {observer} from "mobx-react";
import {useStore} from "../../store/store";
import {assetsURL} from "../../utils/globalconstants";
import React, {useEffect, useState} from "react";
import {useRouter, withRouter} from "next/router";
import { Drawer } from "@material-ui/core";

const CardSideBar = observer(() => {

    const {cart, RemoveFromCart, loadCart, cartOpen, TriggerCart} = useStore()

    const [init, setInit] = useState(false)

    const navig = useRouter()

    useEffect(() => {
     if (!init) {
         loadCart()
         setInit(true)
     }
    })

    const totalPrice = () => {
        let prs = 0
        for (const pps of cart) {
            prs = prs + pps.price.price
        }
        return prs
    }

    return (
        <Drawer open={cartOpen} onClose={() => TriggerCart()}>
            <div className="sidebar-cart-active inside">
                <div className="sidebar-cart-all">
                    <a className="cart-close" href="javascript:;" onClick={() => TriggerCart()}><i className="icofont-close-line"></i></a>
                    <div className="cart-content">
                        <h3>Shopping Cart</h3>
                        <ul>
                            {cart.map((catitem, index) => (
                                <li className="single-product-cart" key={catitem.price.id}>
                                    <div className="cart-img">
                                        <a href="#"><img src={`${assetsURL}/${catitem.variant.assetUrl}`} alt=""/></a>
                                    </div>
                                    <div className="cart-title">
                                        <h4><a href="#">{catitem.variant.name}</a></h4>
                                        <span> {catitem.quantity} × ₹{catitem.price.price}	</span>
                                    </div>
                                    <div className="cart-delete">
                                        <a href="javascript:;" onClick={() => RemoveFromCart(index)}>×</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total">
                            <h4>Subtotal: <span>₹{totalPrice()}</span></h4>
                        </div>
                        <div className="cart-checkout-btn">
                            <a className="btn-hover cart-btn-style" href="javascript:;"
                               onClick={() => {
                                   navig.push('/checkout')
                               }}
                            >View cart / Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
})

export default withRouter<any>(CardSideBar)
