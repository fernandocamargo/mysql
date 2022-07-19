import knex from 'knex';
import express from 'express';

import { PORT } from './constants';
import { parse } from './helpers';
import * as queries from './queries';

export const database = knex({
  client: 'mysql',
  connection: {
    database: 'sql11505635',
    host: 'sql11.freemysqlhosting.net',
    password: 'w168udwR7e',
    port: 3306,
    user: 'sql11505635',
  },
});

export const get = (_, response) => {
  const resolve = ([data]) => response.json(data);
  const reject = (error) => response.status(400).json(parse(error));

  return database.raw(queries.get()).then(resolve).catch(reject);
};

export const listen = () =>
  console.log(`Example app listening on port ${PORT}`);

export const put = (request, response) => {
  const {
    body: { product },
    params: { id },
  } = request;
  const resolve = () => setTimeout(() => response.json({ product }), 1000);
  const reject = (error) => response.status(400).json(parse(error));

  return database('product_name')
    .where({ product_id: id })
    .update({ product_name: product })
    .then(resolve)
    .catch(reject);
};

export default express()
  .use(express.json())
  .get('/products', get)
  .put('/product/:id', put)
  .listen(PORT, listen);
