import TemplateAPI from '../api/template.api';

import Product from '../models/product';

export const ProductResolvers = {
  Date: new Date(),
  Query: {
    products: async () => {
      const currentProducts = await Product.find().exec();

      console.log(currentProducts);
    },
  },
};
