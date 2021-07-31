import { ApolloServer, ServerInfo } from 'apollo-server';
import config from './config';
import dataSources from './data-sources';
import resolvers from './resolvers';
import typeDefs from './type-defs';

const server = new ApolloServer({
  dataSources,
  resolvers,
  typeDefs,
  introspection: true,
});

server.listen(config.port).then((serverInfo: ServerInfo) => {
  const { url } = serverInfo;

  console.log(`🚀 Server ready at ${url}`);
});
