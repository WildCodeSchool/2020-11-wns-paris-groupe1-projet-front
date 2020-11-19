import { ApolloClient, InMemoryCache } from "@apollo/client";

const api = new ApolloClient({
  uri: "http://localhost:4000/graphql", // à changer
  cache: new InMemoryCache(),
});

export default api;