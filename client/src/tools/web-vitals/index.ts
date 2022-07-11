import isFunction from 'lodash/isFunction';

import * as Types from './types';

export default (reporter?: Types.Reporter): Types.Default => {
  const report = (inform: Types.Metric) => inform(reporter);
  const distribute = (metrics: Types.Metrics) =>
    Object.values(metrics).forEach(report);
  const validate = () => isFunction(reporter);
  const initialize = () => import('web-vitals').then(distribute);

  return validate() && initialize();
};
