import styled from 'styled-components';

import * as Types from './types';

export default (component: Types.Default) => styled(component)`
  td[aria-busy='true'] {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    outline: 1px solid rgba(81, 203, 238, 1);
  }
`;
