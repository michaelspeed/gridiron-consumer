export const CardSideBar = () => {
    return (
        <div className="sidebar-cart-active">
            <div className="sidebar-cart-all">
                <a className="cart-close" href="#"><i className="icofont-close-line"></i></a>
                <div className="cart-content">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li className="single-product-cart">
                            <div className="cart-img">
                                <a href="#"><img src="assets/images/cart/cart-1.jpg" alt=""/></a>
                            </div>
                            <div className="cart-title">
                                <h4><a href="#">Awesome Mobile</a></h4>
                                <span> 1 × $49.00	</span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                        <li className="single-product-cart">
                            <div className="cart-img">
                                <a href="#"><img src="assets/images/cart/cart-2.jpg" alt=""/></a>
                            </div>
                            <div className="cart-title">
                                <h4><a href="#">Smart Watch</a></h4>
                                <span> 1 × $49.00	</span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                    </ul>
                    <div className="cart-total">
                        <h4>Subtotal: <span>$170.00</span></h4>
                    </div>
                    <div className="cart-checkout-btn">
                        <a className="btn-hover cart-btn-style" href="cart.html">view cart</a>
                        <a className="no-mrg btn-hover cart-btn-style" href="checkout.html">checkout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
