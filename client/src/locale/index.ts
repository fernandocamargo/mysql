import first from 'lodash/first';

export default () => {
  const {
    navigator: { language, languages },
  } = window;
  const locale = first(languages) || language || 'en-US';

  return locale;
};
