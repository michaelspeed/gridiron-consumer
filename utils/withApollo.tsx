import withApollo from "next-with-apollo";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {GridIronConstants} from "./globalconstants";
import Cookies from 'js-cookie'

export default withApollo(
    // @ts-ignore
    (prop) => {
        const httpLink = createHttpLink({
            uri: 'http://45.118.132.119:5588/shop-api',
        })

        let authLink
        authLink = setContext((_, {headers}) => {
            let token = Cookies.get(GridIronConstants)
            return {
                headers: {
                    ...headers,
                    Authorization: token ? `JWT ${token}` : null
                }
            }
        });

        const isBrowser = typeof window !== "undefined"

        return new ApolloClient({
            ssrMode: !isBrowser,
            link: authLink.concat(httpLink),
            cache: new InMemoryCache().restore(prop.initialState || {}),
        });
    },
    {
        render: ({Page, props}) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props}/>
                </ApolloProvider>
            );
        },
    },
)
