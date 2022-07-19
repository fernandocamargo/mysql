import update from 'immutability-helper';

import * as Types from './types';

export const initialize = (): Types.State => ({ results: [] });

export const load = (results: Types.Results) => (state: Types.State) =>
  update(state, { results: { $set: results } });
