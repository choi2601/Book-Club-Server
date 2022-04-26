import merge from 'loadsh/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { ProductTypeDefs } from './typeDefs';
import { ProductResolvers } from './resolvers';

const schema = makeExecutableSchema({
  typeDefs: [ProductTypeDefs],
  resolvers: merge(ProductResolvers),
});

export default schema;
