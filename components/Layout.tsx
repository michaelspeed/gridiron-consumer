import React, {ReactNode} from 'react'
import Head from 'next/head'
import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";
import withApollo from "../utils/withApollo";
import {Store} from "../gql";
import { Modal, ModalBody, ModalHeader } from "shards-react";
import {observer} from "mobx-react";
import {useStore} from "../store/store";

type Props = {
    children?: ReactNode
    title?: string,
    menu: string,
    store: Store
}

const Layout = ({children, menu, title = 'AirEcommerce', store}: Props) => {

    const {quickview, setQuickView} = useStore(null)

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
            <Footer/>
            <Modal open={quickview} toggle={() => {
                setQuickView()
            }}>
                <ModalHeader>Header</ModalHeader>
                <ModalBody>👋 Hello there!</ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default withApollo(observer(Layout))
