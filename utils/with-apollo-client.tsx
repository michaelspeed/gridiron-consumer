import cookie from 'cookie'
import React from "react";
import initApollo from "./init-apollo";
import Head from "next/head";
import {getDataFromTree} from "@apollo/client/react/ssr";

function parseCookies (req?, options = {}) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options)
}

interface Props {
    apolloState: any
}

const withApolloClient = (App) => {
    return class WithData extends React.Component<Props, any> {
        private apolloClient: any
        static displayName = `WithData(${App.displayName})`
        static async getInitialProps(ctx) {
            const {
                Component,
                router,
                ctx: {req, res}
            } = ctx
            const apollo = initApollo(
                {},
                {
                    getToken: () => parseCookies(req).token
                }
            )
            ctx.ctx.apolloClient = apollo
            let appProps = {}

            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            if (res && res.finished) {
                return {}
            }

            if (typeof window === "undefined") {
                try {
                    await getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo} />)
                } catch (e) {
                    console.error('Error while running `getDataFromTree`', e)
                }
                Head.rewind()
            }

            const apolloState = apollo.cache.extract()
            return {
                ...appProps,
                apolloState
            }
        }

        constructor(props) {
            super(props);

            this.apolloClient = initApollo(props.apolloState, {
                getToken: () => {
                    return parseCookies().token
                }
            })
        }

        render() {
            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }
}

export default withApolloClient
