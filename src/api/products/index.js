const Router = require('koa-router');

const products = new Router();

const productsInfo = (ctx, next) => {
  ctx.body = '처음 baseurl 호출';

  if (!ctx.query) return;
};

products.get('/', productsInfo);

module.exports = products;
