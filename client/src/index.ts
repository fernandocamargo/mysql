import { check, debug, initialize, render } from './helpers';

export default document.fonts.ready
  .then(check)
  .then(initialize)
  .then(render)
  .then(debug);
