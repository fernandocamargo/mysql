import property from 'lodash/property';
import styled from 'styled-components';

import * as Types from './types';

export default (component: Types.Default) => styled(component)`
  border: solid 1px black;
  margin: 1rem;
  padding: 1rem;

  h1 {
    font-family: ${property('theme.typography.emphasis')};
  }

  p {
    margin-top: 1rem;
  }
`;
