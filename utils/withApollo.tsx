import withApollo from "next-with-apollo";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {GridIronConstants} from "./globalconstants";

export default withApollo(
    // @ts-ignore
    ({initialState}) => {
        const httpLink = createHttpLink({
            uri: 'http://45.118.132.119:5588/shop-api',
        })

        let authLink
        let token = process.browser ? localStorage.getItem(GridIronConstants) : undefined
        if (token) {
            authLink = setContext((_, {headers}) => {
                return {
                    headers: {
                        ...headers,
                        Authorization: token ? `JWT ${token}` : null
                    }
                }
            });
        } else {
            authLink = setContext((_, {headers}) => {
                return {
                    headers: {
                        ...headers,
                    }
                }
            });
        }

        return new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache().restore(initialState || {}),
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
