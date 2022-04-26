import TemplateAPI from './api/template.api';

import Product from './models/product';

export default async function createTemplateData() {
  const isEmpty = (await Product.find().exec()).length === 0;

  if (!isEmpty) return;

  const { data } = await TemplateAPI.getTemplateData();
  try {
    Product.insertMany(data, (_, docs) => {
      console.log(docs);
    });
  } catch (e) {
    console.error(e);
  }
}
