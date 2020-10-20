import { ApolloServer } from 'apollo-server';
import config from './config';
import dataSources from './data-sources';
import resolvers from './resolvers';
import typeDefs from './type-defs';

const server = new ApolloServer({
  dataSources,
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
});

server.listen(config.port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
