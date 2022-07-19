import { Clients } from 'contexts';

import * as Types from './types';
import use from './hooks';

export default (({ children }) => {
  const value = use();

  return <Clients.Provider value={value}>{children}</Clients.Provider>;
}) as Types.Default;
