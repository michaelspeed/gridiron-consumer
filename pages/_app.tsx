import React from "react"
import withApollo from "../utils/withApollo";
import 'antd/dist/antd.css'
import "shards-ui/dist/css/shards.min.css"

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Component {...pageProps}/>
        </React.Fragment>
    )
}

export default withApollo(MyApp)
