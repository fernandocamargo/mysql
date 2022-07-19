import { useContext, useMemo } from 'react';

import { Clients } from 'contexts';

import * as Types from './types';
import useAPI from './api';

export default (() => {
  const consumer = useContext(Clients);
  const API = useAPI();
  const provider = useMemo(() => ({ API }), [API]);

  return { consumer, provider };
}) as Types.Default;
