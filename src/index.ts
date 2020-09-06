import { ApolloServer } from "apollo-server";
import dataSources from "./data-sources";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const schema = {
  dataSources,
  resolvers,
  typeDefs,
};

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
