import { useMemo } from 'react';

import { useGet, useSet } from './methods';

export default () => {
  const get = useGet();
  const set = useSet();
  const services = useMemo(() => ({ get, set }), [get, set]);

  return services;
};
