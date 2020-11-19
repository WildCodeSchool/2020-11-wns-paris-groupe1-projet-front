import { gql } from "@apollo/client"

const ADD_FILE = gql`
  mutation AddFiles($file: InputFile) {
    addFile(file: $file) {
      title
      description
      category
      url
      datetime
    }
  }
`

export default ADD_FILE
