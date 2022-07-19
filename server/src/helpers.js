export const parse = (error) =>
  JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
