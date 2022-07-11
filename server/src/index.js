import knex from 'knex';
import express from 'express';

import * as queries from './queries';

export const database = knex({
  client: 'mysql',
  connection: {
    host: 'sql11.freemysqlhosting.net',
    port: 3306,
    user: 'sql11505635',
    password: 'w168udwR7e',
    database: 'sql11505635',
  },
});

export const port = 1337;

export default express()
  .get('/products', (_, response) => {
    database
      .raw(queries.get())
      .then(([data]) => response.json(data))
      .catch((error) => res.status(400).send(error));
  })
  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
