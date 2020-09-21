import React, {useEffect, useState} from "react"
import {
    Collection,
    CreateUserDocument,
    GetCollectionTreeDocument,
    GetCurrentUserDocument,
    LoginUserDocument,
    Store
} from "../../gql";
import {useMutation, useQuery} from "@apollo/client";
import {Button, Divider, Dropdown, Input, Menu, message, Modal, Popover} from "antd";
import {useRouter, withRouter} from "next/router";
import {danger, primary} from "../../utils/colorConfig";
import {GridIronConstants} from "../../utils/globalconstants";
import {observer} from "mobx-react";
import {useStore} from "../../store/store";
import { UserOutlined } from '@ant-design/icons';
import {getCollectionRoute, getFacetRoute} from "../../utils/routingUtils";
import Cookies from 'js-cookie'
import CardSideBar from "../Cart/CartSideBar";
import clsx from "clsx";
import {Drawer} from "@material-ui/core";

interface Props {
    menu: string,
    store: Store
}

const { SubMenu } = Menu;

const Header = observer(({menu, store}: Props) => {

    const [menuTree, setMenuTree] = useState<any[]>([])

    const {setStoreLogin, user, setStoreLogout, TriggerCart, mobileMenu, TriggerMobileMenu} = useStore()

    const {...coltree} = useQuery(GetCollectionTreeDocument)

    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [loading, setLoading] = useState(false)

    const [lemail, setLEmail] = useState('')
    const [lpass, setLPass] = useState('')

    const [rrmail, setREmail] = useState('')
    const [rpass, setRPass] = useState('')
    const [rphone, setRPhone] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const [search, setSearch] = useState('')

    const cookie = new Cookies()

    const navig = useRouter()

    const {...currUser} = useQuery(GetCurrentUserDocument, {pollInterval: 3000})


    useEffect(() => {
        if (currUser.data) {
            setStoreLogin({
                id: currUser.data.GetCurrentUser.id,
                email: currUser.data.GetCurrentUser.email,
                phone: currUser.data.GetCurrentUser.phoneNumber,
                verified: currUser.data.GetCurrentUser.verified,
                firstName: currUser.data.GetCurrentUser.firstName,
                lastName: currUser.data.GetCurrentUser.lastName
            })
        }
    }, [currUser.data])

    const [LoginUser] = useMutation(LoginUserDocument, {
        variables: {
            email: lemail,
            password: lpass
        }
    })

    const [RegisterUser] = useMutation(CreateUserDocument, {
        variables: {
            fname: fname,
            lname: lname,
            phone: rphone,
            password: rpass,
            email: rrmail
        }
    })

    useEffect(() => {
        console.log(JSON.parse(menu))
        setMenuTree(JSON.parse(menu))
    }, [menu])

    const ClickMenuItem = (item) => {
        if (item.target === 'COLLECTION') {
            navig.push(getCollectionRoute(item.targetId))
        } else if (item.target === 'FACET') {
            navig.push(getFacetRoute(item.targetId))
        }
    }

    const ClickFacetItem = (item, parent) => {
        if (parent.target === 'COLLECTION') {
            navig.push(getFacetRoute(item.targetId, parent.targetId))
        }
    }

    return (
        <React.Fragment>
            <div className="main-wrapper main-wrapper-3">
                <header className="header-area section-padding-1 transparent-bar">
                    <div className="header-large-device">
                        <div className="header-top bg-gray-4 header-top-ptb-1">
                            <div className="container-fluid">
                                <div className="row mt-2">
                                    <div className="col-lg-6">
                                        <div className="header-contact-number">
                                            <span>{store.phoneNumber}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-top-right header-top-flex">
                                            <div className="login-reg ml-40">
                                                {!user && <ul>
                                                    <li><a href="javascript:;" onClick={() => setLogin(true)}>Log in</a></li>
                                                    <li><a href="javascript:;" onClick={() => setRegister(true)}>Create Account</a></li>
                                                </ul>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom sticky-bar" style={{marginTop: -10}}>
                            <div className="container-fluid">
                                <div className="header-bottom-flex">
                                    <div className="logo-menu-wrap">
                                        <div className="logo">
                                            <a href="javascript:;" onClick={() => navig.push('/')} style={{textDecoration: "none"}}>
                                                {/*<img src="/images/logo/logo-2.png" alt="logo"/>*/}
                                                <h2 style={{color: primary, fontFamily: 'Kumbh Sans', fontWeight: 700}}>{store.storeName}</h2>
                                            </a>
                                        </div>
                                        <div className="main-menu menu-lh-1 main-menu-padding-1 menu-mrg-1">
                                            <nav>
                                                <ul>
                                                    {menuTree.map((item: any) => {
                                                        if (item.target === "FACET") {
                                                            return (
                                                                <li>
                                                                    <a href="javascript:;" style={{fontFamily: 'Kumbh Sans'}} onClick={() => ClickMenuItem(item)}>{item.title}</a>
                                                                </li>
                                                            )
                                                        }
                                                        if (item.target === 'COLLECTION' && item.children && item.children.length === 0) {
                                                            return (
                                                                <li>
                                                                    <a href="javascript:;" style={{fontFamily: 'Kumbh Sans'}} onClick={() => ClickMenuItem(item)}>{item.title}</a>
                                                                </li>
                                                            )
                                                        }
                                                        if (item.target === 'COLLECTION' && item.children && item.children.length > 0) {
                                                            return (
                                                                <Popover content={() => (
                                                                    <React.Fragment>
                                                                        <Menu mode="inline">
                                                                            {item.children.map((child, index) => {
                                                                                if (child.children !== undefined && child.children.length > 0) {
                                                                                    return  (
                                                                                        <SubMenu
                                                                                            key="sub1"
                                                                                            title={child.title}
                                                                                            style={{fontFamily: 'Kumbh Sans'}}
                                                                                        >
                                                                                            {child.children.map((lilMenu, ind) => (
                                                                                                <Menu.Item key={ind} style={{fontFamily: 'Kumbh Sans'}} onClick={() => ClickFacetItem(lilMenu, child)}>{child.title}</Menu.Item>
                                                                                            ))}
                                                                                        </SubMenu>
                                                                                    )
                                                                                }
                                                                                return (
                                                                                    <Menu.Item key={index} style={{fontFamily: 'Kumbh Sans'}} onClick={() => ClickMenuItem(child)}>{child.title}</Menu.Item>
                                                                                )
                                                                            })}
                                                                        </Menu>
                                                                    </React.Fragment>
                                                                )} title={null}>
                                                                    <li>
                                                                        <a href="javascript:;" style={{fontFamily: 'Kumbh Sans'}} onClick={() => ClickMenuItem(item)}>{item.title}</a>
                                                                    </li>
                                                                </Popover>
                                                            )
                                                        }
                                                        return (
                                                            <li>
                                                                <a href="javascript:;" onClick={() => ClickMenuItem(item)}>{item.title}</a>
                                                                <ul className="mega-menu-style-1 mega-menu-width1 menu-negative-mrg1" style={{backgroundColor: primary}}>
                                                                    {item.children !== undefined && item.children.length > 0
                                                                    && item.children.map((child) => {
                                                                        return (
                                                                            <li className="">
                                                                                <a className="menu-title" href="javascript:;" onClick={() => ClickFacetItem(child, item)}>{child.title}</a>
                                                                                <ul>
                                                                                    {child.children !== undefined && child.children.length > 0
                                                                                    && child.children.map((lilMenu) => (
                                                                                        <li><a href="javascript:;" onClick={() => ClickFacetItem(lilMenu, child)}>{lilMenu.title}</a></li>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-action-wrap header-action-flex header-action-width">
                                        <div className="categories-dropdown">
                                            {!coltree.loading && !coltree.error && <Dropdown overlay={() => (
                                                <Menu>
                                                    {coltree.data.GetCollectionTree.map((coles: Collection) => {
                                                        if (coles.name !== 'default') {
                                                            if (coles.children.length > 0) {
                                                                return (
                                                                    <SubMenu onTitleClick={() => navig.push(`/collection/${coles.id}`)} title={<span className='text-black-50' style={{fontFamily: 'Poppins'}} >{coles.name}</span>}>
                                                                        {coles.children.map(sub => {
                                                                            if (sub.children.length > 0) {
                                                                                return (
                                                                                    <SubMenu onTitleClick={() => navig.push(`/collection/${sub.id}`)} title={<span className='text-black-50' style={{fontFamily: 'Poppins'}} >{sub.name}</span>}>
                                                                                        {sub.children.map(moresub => (
                                                                                            <Menu.Item key={moresub.id} onClick={() => navig.push(`/collection/${moresub.id}`)}>
                                                                                                <span className='text-black-50' style={{fontFamily: 'Poppins'}} >{moresub.name}</span>
                                                                                            </Menu.Item>
                                                                                        ))}
                                                                                    </SubMenu>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <Menu.Item key={sub.id} onClick={() => navig.push(`/collection/${sub.id}`)}>
                                                                                        <span className='text-black-50' style={{fontFamily: 'Poppins'}} >{sub.name}</span>
                                                                                    </Menu.Item>
                                                                                )
                                                                            }
                                                                        })}
                                                                    </SubMenu>
                                                                )
                                                            } else {
                                                                return (
                                                                    <Menu.Item key={coles.id} onClick={() => navig.push(`/collection/${coles.id}`)}>
                                                                        <span className='text-black-50' style={{fontFamily: 'Poppins'}} >{coles.name}</span>
                                                                    </Menu.Item>
                                                                )
                                                            }
                                                        }
                                                    })}
                                                </Menu>
                                            )}>
                                                <Button style={{height: 45}}>
                                                    Browse By Category
                                                </Button>
                                            </Dropdown>}
                                        </div>
                                        <div className="search-style-2 mr-20">
                                            <form>
                                                <div className="form-search-2">
                                                    <input className="input-text" value={search} onChange={event => setSearch(event.target.value)}
                                                           placeholder="Type to search (Ex: Phone, Laptop)"
                                                           type="search"/>
                                                    <button>
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="same-style header-cart">
                                            <a className="" href="javascript:;" onClick={() => TriggerCart()}>
                                                <i className="fas fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                        {user && <div className="same-style header-cart ml-5">
                                            <Dropdown overlay={() => (
                                                <Menu>
                                                    <Menu.Item>
                                                        <a href="javascript:;" onClick={() => navig.push('/accounts?q=orders')}>
                                                            Order
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a href="javascript:;" onClick={() => navig.push('/accounts?q=profile')}>
                                                            My Profile
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a href="javascript:;" onClick={() => navig.push('/accounts?q=address')}>
                                                            My Addresses
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item danger onClick={() => {
                                                        setStoreLogout()
                                                        Cookies.remove(GridIronConstants)
                                                    }}>
                                                        Logout
                                                    </Menu.Item>
                                                </Menu>
                                            )}>
                                                <a onClick={e => e.preventDefault()} >
                                                    <i className="fas fa-user"></i>
                                                </a>
                                            </Dropdown>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-small-device header-small-ptb sticky-bar mb-10">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="mobile-logo mobile-logo-width">
                                        <a href="javascript:;" onClick={() => navig.push('/')}>
                                            <h3 style={{color: primary, fontFamily: 'Kumbh Sans', fontWeight: 700}}>{store.storeName}</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="header-action-wrap header-action-flex header-action-mrg-1">
                                        <div className="same-style header-cart">
                                            <a href="javascript:;" onClick={() => TriggerCart()}><i
                                                className="icofont-shopping-cart"></i></a>
                                        </div>
                                        <div className="same-style header-info">
                                            <button onClick={() => TriggerMobileMenu()}>
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
            <Drawer open={mobileMenu} onClose={() => TriggerMobileMenu()}>
                <div className="mobile-menu-active clickalbe-sidebar-wrapper-style-1 sidebar-visible">
                    <div className="clickalbe-sidebar-wrap">
                        <a className="sidebar-close" onClick={() => TriggerMobileMenu()}><i className="icofont-close-line"></i></a>
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
                                            <li className={clsx({'has-sub-menu': (item.children !== undefined && item.children.length > 0)})}><a href="javascript:;" onClick={() => ClickMenuItem(item)}>{item.title}</a>
                                                {item.children !== undefined && item.children.length > 0 &&
                                                <ul className="sub-menu-2">
                                                    {item.children.map((child) => {
                                                        return (
                                                            <li className={clsx({'has-sub-menu': (child.children !== undefined && child.children.length > 0)})}>
                                                                <a href="javascript:;" onClick={() => ClickMenuItem(item)}>{child.title}</a>
                                                                {child.children !== undefined && child.children.length > 0 && <ul className="sub-menu-2">
                                                                    {child.children.map((lilMenu) => (
                                                                        <li><a href="javascript:;" onClick={() => ClickFacetItem(lilMenu, child)}>{lilMenu.title}</a></li>
                                                                    ))}
                                                                </ul>}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <Divider/>
                            <div className="aside-contact-info">
                                {!user && <ul>
                                    <li><a href="javascript:;" onClick={() => {
                                        setLogin(true)
                                        TriggerMobileMenu()
                                    }}>Log in</a></li>
                                    <li><a href="javascript:;" onClick={() => {
                                        setRegister(true)
                                        TriggerMobileMenu()
                                    }}>Create Account</a></li>
                                </ul>}
                                {user && <ul>
                                    <li onClick={() => navig.push('/accounts?q=orders')}>Order</li>
                                    <li onClick={() => navig.push('/accounts?q=profile')}>My Profile</li>
                                    <li onClick={() => navig.push('/accounts?q=address')}>My Addresses</li>
                                    <li onClick={() => {
                                        setStoreLogout()
                                        Cookies.remove(GridIronConstants)
                                    }} style={{color: danger}}>Logout</li>
                                </ul>}
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Modal visible={login} footer={null} title={<h6 style={{color: primary, marginBottom: -10}}>Login</h6>} closable={false} onCancel={() => setLogin(false)}>
                <div className='container'>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Email or Phone</label>
                        <Input placeholder="Email or Phone" value={lemail} onChange={event => setLEmail(event.target.value)}/>
                    </div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Password</label>
                        <Input placeholder="Password" type={"password"} value={lpass} onChange={event => setLPass(event.target.value)}/>
                    </div>
                    <div>
                        <Button type={"primary"} loading={loading}
                                onClick={() => {
                                    setLoading(true)
                                    LoginUser()
                                        .then(value => {
                                            // localStorage.setItem(GridIronConstants, value.data!.LoginUser!.token)
                                            Cookies.set(GridIronConstants, value.data!.LoginUser!.token)
                                            setLoading(false)
                                            setLogin(false)
                                            setStoreLogin({
                                                id: value.data.LoginUser.user.id,
                                                email: value.data.LoginUser.user.email,
                                                phone: value.data.LoginUser.user.phoneNumber,
                                                verified: value.data.LoginUser.user.verified,
                                                firstName: value.data.LoginUser.user.firstName,
                                                lastName: value.data.LoginUser.user.lastName
                                            })
                                        })
                                        .catch(error => {
                                            setLoading(false)
                                            message.error(error.message)
                                        })
                                }}
                        >Login</Button>
                    </div>
                </div>
            </Modal>
            <Modal visible={register} footer={null} title={<h6 style={{color: primary, marginBottom: -10}}>Register</h6>} closable={false} onCancel={() => setRegister(false)}>
                <div className='container'>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>First Name</label>
                        <Input placeholder="First Name" value={fname} onChange={event => setFname(event.target.value)}/>
                    </div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Last Name</label>
                        <Input placeholder="Last Name" value={lname} onChange={event => setLname(event.target.value)}/>
                    </div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Email</label>
                        <Input placeholder="Email" value={rrmail} onChange={event => setREmail(event.target.value)}/>
                    </div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Phone</label>
                        <Input placeholder="Phone" value={rphone} onChange={event => setRPhone(event.target.value)}/>
                    </div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <label>Password</label>
                        <Input placeholder="Password" type={"password"} value={rpass} onChange={event => setRPass(event.target.value)}/>
                    </div>
                    <div>
                        <Button type={"primary"} loading={loading}
                                onClick={() => {
                                    setLoading(true)
                                    RegisterUser()
                                        .then(value => {
                                            // localStorage.setItem(GridIronConstants, value.data!.CreateUser!.token)
                                            Cookies.set(GridIronConstants, value.data!.CreateUser!.token)
                                            setLoading(false)
                                            setRegister(false)
                                            setStoreLogin({
                                                id: value.data.CreateUser.user.id,
                                                email: value.data.CreateUser.user.email,
                                                phone: value.data.CreateUser.user.phoneNumber,
                                                verified: value.data.CreateUser.user.verified,
                                                firstName: value.data.CreateUser.user.firstName,
                                                lastName: value.data.CreateUser.user.lastName
                                            })
                                        })
                                        .catch(error => {
                                            setLoading(false)
                                            message.error(error.message)
                                        })
                                }}
                        >Register</Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
})

export default withRouter<any>(Header)
