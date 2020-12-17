import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ... on User {
        id
        firstname
        lastname
        birthday
        email
        password
        token
      }
      ... on Message {
        message
      }
    }
  }
`;
