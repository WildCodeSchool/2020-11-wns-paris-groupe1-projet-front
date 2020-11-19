import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // à changer
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetOdysseyApi {
        files {
            title
            description
            category
            url
            datetime
        }
      }
    `,
  })
  .then((result) => console.log(result, 'result'));

export default client;