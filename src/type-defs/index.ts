import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    foo: String
  }
`;

export default typeDefs;
