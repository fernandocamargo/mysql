import { useCallback } from 'react';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import Table from 'react-bootstrap/Table';

import { Result } from 'components/widgets';

import * as Types from './types';
import use from './hooks';

export default (() => {
  const { fetching, onInput, results } = use();
  const renderResult = useCallback(
    (result: Types.Result, index: number) => (
      <Result key={index} onInput={onInput} {...result} />
    ),
    [onInput]
  );

  switch (true) {
    case fetching.pending:
      return (
        <Placeholder animation="wave" as="div">
          <Placeholder xs={12} />
          <Placeholder xs={9} />
          <Placeholder xs={6} />
        </Placeholder>
      );
    case !!fetching.error:
      return (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{fetching.error?.message}</p>
        </Alert>
      );
    case !!results.length:
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
    default:
      return null;
  }
}) as Types.Default;
