import React, {ReactNode} from 'react'
import Head from 'next/head'
import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

type Props = {
    children?: ReactNode
    title?: string,
    menu: string
}

const Layout = ({children, menu, title = 'AirEcommerce'}: Props) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header menu={menu}/>
            {children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout
