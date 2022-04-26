require('dotenv').config();

import Koa from 'Koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-koa';

import schema from './graphql/schema';

const { PORT, MONGO_URL } = process.env;

(async function startApolloServer(schema) {
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  const app = new Koa();

  apolloServer.applyMiddleware({ app, path: '/' });

  await new Promise((resolve) =>
    app.listen({ port: PORT || MONGO_URL }, resolve),
  );
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`,
  );
})(schema);
