import update from 'immutability-helper';

import * as Types from './types';

export const initialize = (): Types.State => ({ error: null, pending: false });

export const attempt = () => (state: Types.State) =>
  update(state, { pending: { $set: true } });

export const reject = (error: Error) => (state: Types.State) =>
  update(state, { error: { $set: error }, pending: { $set: false } });

export const resolve = () => (state: Types.State) =>
  update(state, {
    error: { $set: initialize().error },
    pending: { $set: false },
  });
