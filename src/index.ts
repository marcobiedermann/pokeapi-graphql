import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const schema = {
  typeDefs,
  resolvers,
};

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
