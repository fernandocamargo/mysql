import axios from 'axios';
import { useMemo } from 'react';

import { reject, resolve } from './helpers';

export default () => {
  const client = useMemo(() => {
    const instance = axios.create({ baseURL: '/' });

    instance.interceptors.response.use(resolve, reject);

    return instance;
  }, []);

  return client;
};
