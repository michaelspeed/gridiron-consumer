import React, {ReactNode} from 'react'
import Head from 'next/head'
import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";
import withApollo from "../utils/withApollo";
import {Store} from "../gql";
import {observer} from "mobx-react";
import {useStore} from "../store/store";
import {IconButton, initializeIcons, Modal} from "office-ui-fabric-react";
import VariantQuickView from "./QuickView/VariantQuickView";
import {Drawer} from "@material-ui/core";

initializeIcons()

type Props = {
    children?: ReactNode
    title?: string,
    menu: string,
    store: Store
}

const cancelIcon = { iconName: 'Cancel' };

const Layout = ({children, menu, title = 'AirEcommerce', store}: Props) => {

    const {quickview, setQuickView, setQuickViewNull, qtype} = useStore()

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="main-wrapper main-wrapper-3">
                <Header menu={menu} store={store}/>
                {children}
            </div>
            <Footer store={store}/>
            <Drawer open={quickview} anchor={"bottom"} onClose={() => {
                setQuickView()
                setQuickViewNull()
            }}>
                <div style={{padding: 20, overflow: "auto"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <h3>Quick View</h3>
                        <IconButton
                            iconProps={cancelIcon}
                            ariaLabel="Close popup modal"
                            onClick={() => {
                                setQuickView()
                                setQuickViewNull()
                            }}
                        />
                    </div>
                    <hr/>
                    {qtype && <React.Fragment>
                        {qtype!.type === 'product' && <VariantQuickView id={qtype!.id}/>}
                    </React.Fragment>}
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default withApollo(observer(Layout)) as any
