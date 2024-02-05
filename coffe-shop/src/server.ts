import express from "express";
// import * as express from "express";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import resolvers from "./graphql/resolvers";

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any });

  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
    );
  });
}

startServer();
