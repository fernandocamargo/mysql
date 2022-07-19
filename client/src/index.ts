import { check, initialize, inspect, render } from './helpers';

export default document.fonts.ready
  .then(check)
  .then(initialize)
  .then(render)
  .then(inspect);
