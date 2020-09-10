import withApollo from "next-with-apollo";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {GridIronConstants} from "./globalconstants";
import Cookies from "universal-cookie";

export default withApollo(
    // @ts-ignore
    (prop) => {
        const httpLink = createHttpLink({
            uri: 'http://45.118.132.119:5588/shop-api',
        })

        const cookies = new Cookies();

        let authLink
        let token = cookies.get(GridIronConstants)
        authLink = setContext((_, {headers}) => {
            return {
                headers: {
                    ...headers,
                    Authorization: token ? `JWT ${token}` : null
                }
            }
        });

        return new ApolloClient({
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
