import React, {useEffect, useState} from "react"
import {CardSideBar} from "../Cart/CartSideBar";

interface Props {
    menu: string
}

const Header = ({menu}: Props) => {

    const [menuTree, setMenuTree] = useState<any[]>([])

    useEffect(() => {
        console.log(JSON.parse(menu))
        setMenuTree(JSON.parse(menu))
    }, [menu])

    return (
        <React.Fragment>
            <div className="main-wrapper main-wrapper-3">
                <header className="header-area section-padding-1 transparent-bar">
                    <div className="header-large-device">
                        <div className="header-top bg-gray-4 header-top-ptb-1">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="header-contact-number">
                                            <span>+123 421 321</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-top-right header-top-flex">
                                            <div className="language-wrap">
                                                <a className="language-dropdown-active" href="#"><img
                                                    src="/images/icon-img/flag.png" alt=""/></a>
                                                <div className="language-dropdown">
                                                    <ul>
                                                        <li><a href="#">English</a></li>
                                                        <li><a href="#">Spanish</a></li>
                                                        <li><a href="#">Hindi </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="login-reg ml-40">
                                                <ul>
                                                    <li><a href="#">Log in</a></li>
                                                    <li><a href="#">Create Account</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom sticky-bar">
                            <div className="container-fluid">
                                <div className="header-bottom-flex">
                                    <div className="logo-menu-wrap">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="/images/logo/logo-2.png" alt="logo"/>
                                            </a>
                                        </div>
                                        <div className="main-menu menu-lh-1 main-menu-padding-1 menu-mrg-1">
                                            <nav>
                                                <ul>
                                                    {menuTree.map((item: any) => (
                                                        <li>
                                                            <a href="index.html">{item.title}</a>
                                                            <ul className="mega-menu-style-1 mega-menu-width1 menu-negative-mrg1">
                                                                {item.children !== undefined && item.children.length > 0
                                                                && item.children.map((child) => {
                                                                    return (
                                                                        <li className="">
                                                                            <a className="menu-title" href="#">{child.title}</a>
                                                                            <ul>
                                                                                {child.children !== undefined && child.children.length > 0
                                                                                    && child.children.map((lilMenu) => (
                                                                                    <li><a href="index.html">{lilMenu.title}</a></li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-action-wrap header-action-flex header-action-width">
                                        <div className="categories-dropdown">
                                            <select className="nice-select nice-select-style-1">
                                                <option>Categories</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                        <div className="search-style-2 mr-20">
                                            <form>
                                                <div className="form-search-2">
                                                    <input className="input-text" value=""
                                                           placeholder="Type to search (Ex: Phone, Laptop)"
                                                           type="search"/>
                                                        <button>
                                                            <i className="icofont-search-1"></i>
                                                        </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="same-style header-cart">
                                            <a className="cart-active" href="#"><i
                                                className="icofont-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-small-device header-small-ptb sticky-bar">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="mobile-logo mobile-logo-width">
                                        <a href="index.html">
                                            <img alt="" src="assets/images/logo/logo-2.png"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="header-action-wrap header-action-flex header-action-mrg-1">
                                        <div className="same-style header-cart">
                                            <a className="cart-active" href="#"><i
                                                className="icofont-shopping-cart"></i></a>
                                        </div>
                                        <div className="same-style header-info">
                                            <button className="mobile-menu-button-active">
                                                <span className="info-width-1"></span>
                                                <span className="info-width-2"></span>
                                                <span className="info-width-3"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <CardSideBar/>
            <div className="mobile-menu-active clickalbe-sidebar-wrapper-style-1">
                <div className="clickalbe-sidebar-wrap">
                    <a className="sidebar-close"><i className="icofont-close-line"></i></a>
                    <div className="mobile-menu-content-area sidebar-content-100-percent">
                        <div className="mobile-search">
                            <form className="search-form" action="#">
                                <input type="text" placeholder="Search here…"/>
                                    <button className="button-search"><i className="icofont-search-1"></i></button>
                            </form>
                        </div>
                        <div className="clickable-mainmenu-wrap clickable-mainmenu-style1">
                            <nav>
                                <ul>
                                    {menuTree.map((item: any) => (
                                        <li className="has-sub-menu"><a href="#">{item.title}</a>
                                            <ul className="sub-menu-2">
                                                {item.children !== undefined && item.children.length > 0
                                                && item.children.map((child) => {
                                                    return (
                                                        <li className="has-sub-menu"><a href="#">{child.title}</a>
                                                            <ul className="sub-menu-2">
                                                                {child.children !== undefined && child.children.length > 0
                                                                && child.children.map((lilMenu) => (
                                                                    <li><a href="index.html">{lilMenu.title}</a></li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="aside-contact-info">
                            <ul>
                                <li><i className="icofont-clock-time"></i>Monday - Friday: 9:00 - 19:00</li>
                                <li><i className="icofont-envelope"></i>Info@example.com</li>
                                <li><i className="icofont-stock-mobile"></i>(+55) 254. 254. 254</li>
                                <li><i className="icofont-home"></i>Helios Tower 75 Tam Trinh Hoang - Ha Noi - Viet Nam
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
