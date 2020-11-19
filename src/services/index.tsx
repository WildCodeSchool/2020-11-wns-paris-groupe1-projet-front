import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetSpaceX {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          links {
            video_link
          }
          details
        }
      }
    `,
  })
  .then((result) => console.log(result, 'result'));

export default client;
