require('dotenv').config();

import Koa from 'Koa';
import { ApolloServer } from 'apollo-server-koa';
import mongoose from 'mongoose';

import schema from './graphql/schema';

import createTemplateData from './createTemplateData';

const { PORT, MONGO_URI } = process.env;

(async function startApolloServer(schema) {
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  const app = new Koa();

  apolloServer.applyMiddleware({ app, path: '/' });

  await new Promise((resolve) =>
    app.listen({ port: PORT || MONGO_URI }, resolve),
  );
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`,
  );
})(schema);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    createTemplateData();
  })
  .catch((e) => {
    console.error(e);
  });
