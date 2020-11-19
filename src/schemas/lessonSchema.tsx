import { gql } from "@apollo/client";

const LESSONS = gql`
  {
    files {
      title
      description
      category
      url
      datetime
    }
  }
`;

export default LESSONS