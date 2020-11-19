import { gql } from "@apollo/client";

const ADD_FILE = gql`
  mutation {
    addFile(
      file: {
        title: "test"
        description: "test"
        category: "test"
        url: "test"
      }
    ) {
      title
      description
      category
      url
      datetime
    }
  }
`;

export default ADD_FILE;
