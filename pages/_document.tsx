import Document, {Html, Head, Main, NextScript} from 'next/document';
import {InjectionMode, Stylesheet} from "@uifabric/styling";
import {resetIds} from "@uifabric/utilities";
import {ServerStyleSheets} from "@material-ui/styles";
import React from "react";

export default class MyDocument extends Document<any> {

    static getInitialProps({renderPage}) {
        const stylesheet = Stylesheet.getInstance()
        stylesheet.setConfig({
            injectionMode: InjectionMode.none,
            namespace: 'server'
        })
        stylesheet.reset()
        resetIds()

        const page = renderPage((App) => (props) => <App {...props} />);

        return { ...page, styleTags: stylesheet.getRules(true) };
    }

    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <script src="/js/vendor/jquery-3.5.1.min.js"></script>
                    <script src="/js/plugins/slick.js"></script>
                    <link rel="stylesheet" href="/css/vendor/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/vendor/vandella.css"/>
                    <link rel="stylesheet" href="/css/vendor/jellybelly.css"/>
                    <link rel="stylesheet" href="/css/vendor/icofont.min.css"/>
                    <link rel="stylesheet" href="/css/vendor/fontello.css"/>
                    <link rel="stylesheet" href="/css/plugins/easyzoom.css"/>
                    <link rel="stylesheet" href="/css/plugins/slick.css"/>
                    <link rel="stylesheet" href="/css/plugins/nice-select.css"/>
                    <link rel="stylesheet" href="/css/plugins/animate.css"/>
                    <link rel="stylesheet" href="/css/plugins/magnific-popup.css"/>
                    <link rel="stylesheet" href="/css/plugins/jquery-ui.css"/>
                    <link rel="stylesheet" href="/css/plugins/carousel.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                          crossOrigin="anonymous"/>
                    <style type="text/css" dangerouslySetInnerHTML={{__html: this.props.styleTags}} />
                    <script src="https://checkout.razorpay.com/v1/checkout.js"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                <script src="/js/vendor/modernizr-3.6.0.min.js"></script>
                <script src="/js/vendor/jquery-3.5.1.min.js"></script>
                <script src="/js/vendor/jquery-migrate-3.3.0.min.js"></script>
                <script src="/js/vendor/bootstrap.bundle.min.js"></script>
                <script src="/js/plugins/slick.js"></script>
                <script src="/js/plugins/countdown.js"></script>
                <script src="/js/plugins/wow.js"></script>
                <script src="/js/plugins/instafeed.js"></script>
                <script src="/js/plugins/svg-injector.min.js"></script>
                <script src="/js/plugins/jquery.nice-select.min.js"></script>
                <script src="/js/plugins/mouse-parallax.js"></script>
                <script src="/js/plugins/images-loaded.js"></script>
                <script src="/js/plugins/isotope.js"></script>
                <script src="/js/plugins/jquery-ui-touch-punch.js"></script>
                <script src="/js/plugins/jquery-ui.js"></script>
                <script src="/js/plugins/magnific-popup.js"></script>
                <script src="/js/plugins/easyzoom.js"></script>
                <script src="/js/plugins/scrollup.js"></script>
                <script src="/js/plugins/ajax-mail.js"></script>
                {/*<script src="/js/main.js"></script>*/}
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx: any) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
