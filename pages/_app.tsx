import React from "react"
import withApollo from "../utils/withApollo";
import 'antd/dist/antd.css'
import "shards-ui/dist/css/shards.min.css"
import '../styles/style.css'
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme/theme";
import {CssBaseline} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from "next/router";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps}/>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default withApollo(MyApp)
