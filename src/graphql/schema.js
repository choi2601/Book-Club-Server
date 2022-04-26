import merge from 'loadsh/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import * as products from './products';

const schema = makeExecutableSchema({
  typeDefs: [products.typeDefs],
  resolvers: merge(products.resolvers),
});

export default schema;
