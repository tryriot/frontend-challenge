import gql from "graphql-tag";

export const GET_EMPLOYEES = gql`
  query getEmployees {
    employees {
      id
      name
      status
    }
  }
`;
