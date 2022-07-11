// @ts-nocheck
import update from 'immutability-helper';

import { CLEAR, SET_DETAILS } from './constants';

export const initialize = () => ({ details: {} });

export default (state = initialize(), { type, details }) => {
  switch (type) {
    case CLEAR:
      return update(state, { details: { $set: {} } });
    case SET_DETAILS:
      return update(state, { details: { $set: details } });
    default:
      return state;
  }
};
