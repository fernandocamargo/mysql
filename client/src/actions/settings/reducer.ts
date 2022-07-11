// @ts-nocheck
import getLocale from 'locale';

export const initialize = () => ({ locale: getLocale() });

export default (state = initialize(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};
