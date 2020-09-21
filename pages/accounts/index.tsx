import {GetDefaultStoreDocument, GetHomePageDocument, GetMenuDocument} from "../../gql";
import {initializeStore, useStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import withApollo from "../../utils/withApollo";
import useScripts from "../../utils/useScript";
import Layout from "../../components/Layout";
import {observer} from "mobx-react";
import ProfileInfo from "../../components/Account/ProfileInfo";
import clsx from "clsx";
import {useRouter} from "next/router";
import AddressInfo from "../../components/Account/AdressesInfo";
import OrdersInfo from "../../components/Account/OrdersInfo";

interface Props {
    menu: any,
    main: any,
    list: any,
    store: any,
    query: string
}

const AccountPage = ({menu, store, query}: Props) => {

    useScripts('/js/main.js')
    const {user} = useStore()
    const navig = useRouter()

    return (
        <Layout title={store.storeName} menu={menu.data.GetMenu.menu} store={store}>
            <div className="shop-area pt-160 pb-160">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            {query === 'profile' && <ProfileInfo/>}
                            {query === 'address' && <AddressInfo/>}
                            {query === 'orders' && <OrdersInfo/>}
                        </div>
                        <div className="col-lg-3">
                            {user && <div className="shop-sidebar-style" style={{marginBottom: 30}}>
                                <div className="sidebar-widget">
                                    <h3 className="pro-sidebar-title">Hi {user.firstName} {user.lastName}</h3>
                                </div>
                            </div>}
                            <div className="shop-sidebar-style">
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">My Account</h4>
                                    <div className="sidebar-widget-categori mt-45 mb-70">
                                        <ul>
                                            <li>
                                                <a className={clsx({'active': query === 'profile'})} href="javascript:;"
                                                   onClick={() => {
                                                       navig.push(`/accounts?q=profile`)
                                                   }}
                                                >Profile Information</a>
                                            </li>
                                            <li>
                                                <a className={clsx({'active': query === 'address'})} href="javascript:;"
                                                   onClick={() => {
                                                       navig.push(`/accounts?q=address`)
                                                   }}
                                                >Manage Address</a>
                                            </li>
                                            <li>
                                                <a className={clsx({'active': query === 'orders'})} href="javascript:;"
                                                   onClick={() => {
                                                       navig.push(`/accounts?q=orders`)
                                                   }}
                                                >Orders</a>
                                            </li>
                                        </ul>
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

AccountPage.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const query = ctx.query
    const menu = await client.query({
        query: GetMenuDocument
    })
    const home = await client.query({
        query: GetHomePageDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })

    const store = initializeStore()

    return {
        menu,
        main: home.data.getHomePage.single.main,
        list: home.data.getHomePage.single.lists,
        store: defaultStore.data.GetDefaultStore,
        initialStore: getSnapshot(store),
        query: query.q
    }
}

export default withApollo(observer(AccountPage))
