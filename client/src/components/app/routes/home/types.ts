import { FC } from 'react';

import type { Default as Results } from 'types/results';

export type { Default as Result } from 'types/result';

export type Default = FC<PropTypes>;

export interface PropTypes {}

export interface State {
  results: Results;
}

export { Results };
