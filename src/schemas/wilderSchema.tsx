import { gql } from "@apollo/client";

const ALL_WILDERS = gql`
  query GetAllWilders {
    allWilders {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;

export default ALL_WILDERS
​