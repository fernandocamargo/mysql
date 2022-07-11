import Table from 'react-bootstrap/Table';

import * as Types from './types';
import use from './hooks';
import { FC } from 'react';

export const Result: FC<Types.Result> = ({ i18n, id, product, number }) => (
  <tr>
    <td>{id}</td>
    <td>{product}</td>
    <td>{i18n}</td>
    <td>{number}</td>
  </tr>
);

export const renderResult = (result: Types.Result, index: number) => (
  <Result key={index} {...result} />
);

export default () => {
  const { results } = use();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>I18N Name</th>
          <th>Model Number</th>
        </tr>
      </thead>
      <tbody>{results.map(renderResult)}</tbody>
    </Table>
  );
};
