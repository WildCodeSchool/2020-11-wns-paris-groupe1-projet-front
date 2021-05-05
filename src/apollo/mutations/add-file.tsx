import { gql } from '@apollo/client';

const ADD_FILE = gql`
  mutation AddFile($file: InputFile) {
    addFile(file: $file) {
      title
      description
      category
      url
      datetime
    }
  }
`;

export default ADD_FILE;
