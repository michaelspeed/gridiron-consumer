import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import Cookies from 'js-cookie'

let apolloClient: any = null

if (typeof window === 'undefined') {
    global.fetch = fetch
}

function create (initalState, {fetchOptions}) {
    const httpLink = createHttpLink({
        uri: 'http://45.118.132.119:5588/shop-api',
        fetchOptions
    })
    const authLink = setContext((_, {headers}) => {
        const token = Cookies.get('token')
        return {
            headers: {
                ...headers,
                Authorization: token ? `JWT ${token}` : null
            }
        }
    });

    const isBrowser = typeof window !== "undefined"

    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initalState || {})
    })
}

export default function initApollo(initialState, options) {
    if (typeof window === "undefined") {
        let fetchOptions = {}

        if (process.env.https_proxy) {
            fetchOptions = {
                agent: new (require('https-proxy-agent'))(process.env.https_proxy)
            }
        }
        return create(initialState, {
            ...options,
            fetchOptions
        })
    }

    if (!apolloClient) {
        apolloClient = create(initialState, options)
    }

    return apolloClient
}
