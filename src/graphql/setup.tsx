import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://emerging-marmot-22.hasura.app/v1/graphql', // replace with your GraphQL endpoint
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;