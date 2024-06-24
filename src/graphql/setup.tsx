import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers, 'x-hasura-admin-secret': 'ja6MRbPHZpElgmyy1LKis1gbS35WFRoJ2vxTssV0GkAWdyDi3dyadblRp3MPv8Fg'
        }
    }
});


const httpLink = createHttpLink({
    uri: 'https://emerging-marmot-22.hasura.app/v1/graphql',
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client