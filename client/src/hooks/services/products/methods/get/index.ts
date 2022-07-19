import { useCallback } from 'react';

import * as Types from './types';
import { useClients } from 'hooks';

export default () => {
  const {
    consumer: { API },
  } = useClients();
  const service: Types.Default = useCallback(() => API.get('/products'), [API]);

  return service;
};
