import { gql } from "@apollo/client";

const COURSES = gql`
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

export default COURSES