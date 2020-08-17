import React from "react"
import withApollo from "../utils/withApollo";
import 'antd/dist/antd.css'
import "shards-ui/dist/css/shards.min.css"
import '../styles/style.css'
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme/theme";
import {CssBaseline} from "@material-ui/core";

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
