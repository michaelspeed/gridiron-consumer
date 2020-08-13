import React from "react"
import withApollo from "../utils/withApollo";

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Component {...pageProps}/>
        </React.Fragment>
    )
}

export default withApollo(MyApp)
