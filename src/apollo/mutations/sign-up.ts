import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      ...on User {
        firstname
        lastname
        birthday
        email
        password
      }
      ...on Message {
        message
      }
    }
    ...on Message {
      message
    }
  }
`;
