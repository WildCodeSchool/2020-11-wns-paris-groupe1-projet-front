import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
  uri: process.env.URI_GRAPHQL, // à changer
  cache: new InMemoryCache(),
});

export default api;
