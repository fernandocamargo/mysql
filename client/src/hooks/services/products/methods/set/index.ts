import { useCallback } from 'react';

import * as Types from './types';
import { useClients } from 'hooks';

export default () => {
  const {
    consumer: { API },
  } = useClients();
  const service: Types.Default = useCallback(
    ({ id, product }: { id: number; product: string }) =>
      API.put(`/product/${id}`, { product }),
    [API]
  );

  return service;
};
