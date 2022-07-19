import noop from 'lodash/noop';
import { useCallback, useEffect, useState } from 'react';

import { useAsync } from 'hooks';
import { useProducts } from 'hooks/services';

import * as Types from './types';
import * as reducers from './reducers';

export default () => {
  const [state, persist] = useState(reducers.initialize());
  const Products = useProducts();
  const fetching = useAsync();
  const onInput = useCallback(
    ({ id, product }: { id: number; product: string }) =>
      Products.set({ id, product }),
    [Products]
  );

  useEffect(() => {
    const load = (response: Types.Results) => persist(reducers.load(response));

    return void fetching.watch(Products.get()).then(load).catch(noop);
  }, [Products, fetching]);

  return { fetching, onInput, ...state };
};
