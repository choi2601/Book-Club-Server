import TemplateAPI from '../api/template.api';

export const ProductResolvers = {
  Date: new Date(),
  Query: {
    products: async () => {
      const { data } = await TemplateAPI.getTemplateData();

      try {
        return data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
