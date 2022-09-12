import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query {
    User {
      UserName
      Email
      Role
    }
  }
`;
export const LOGIN_USER = gql`
  query Login($email: String, $password: String) {
    login(Email: $email, Password: $password) {
      Email
      Password
      Token
    }
  }
`;
export const LISTEMAIL = gql`
  query {
    FindByRole(Role: "Student") {
      UserName
      Role
      Email
    }
  }
`;

// FindByIdUser(id: "630c848a9b14291111874f5c") {
//   UserName
//   Role
//   Email
// }
