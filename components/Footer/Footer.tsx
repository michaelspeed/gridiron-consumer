import {useStore} from "../../store/store";

export default function Footer({store}) {

    const {} = useStore()

    return (
        <footer className="footer-area">
            {/*<div className="footer-top pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-title-2">Instagram</h3>
                                <div className="instagram-feed-area mr-40">
                                    <div className="instagram-wrap-1">
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-1.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-2.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-3.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-4.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-5.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="single-instafeed-wrap">
                                            <div className="single-instafeed">
                                                <a href="#"><img src="assets/images/instafeed/instafeed-6.jpg"
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-title-2">About us</h3>
                                <div className="footer-info-list-2">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Shipping & Return</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-title-2">Product Categories</h3>
                                <div className="footer-info-list-2">
                                    <ul>
                                        <li><a href="shop.html">Bed</a></li>
                                        <li><a href="shop.html">Sofa</a></li>
                                        <li><a href="shop.html">Office Furniture</a></li>
                                        <li><a href="shop.html">Chair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-title-2">Connect</h3>
                                <div className="footer-connect">
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    <a href="#">info@yourdomain.com</a>
                                    <a href="#">(+68) 120034509</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="footer-bottom border-top-2 copyright-ptb-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-3 col-md-12">
                            <div className="footer-menu">
                                <nav>
                                    <ul>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">License</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="copyright-2 text-center">
                                <p>Copyright © 2020 {store.storeName}- All Right
                                    Reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-12">
                            <div className="social-icon social-icon-right">
                                <a href="#"><i className="icon-social-twitter"></i></a>
                                <a href="#"><i className="icon-social-pinterest"></i></a>
                                <a href="#"><i className="icon-social-instagram"></i></a>
                                <a href="#"><i className="icon-social-facebook-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
