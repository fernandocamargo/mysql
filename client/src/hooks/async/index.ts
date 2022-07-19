import { useCallback, useEffect, useRef, useState } from 'react';

import { Validity } from './helpers';
import * as reducers from './reducers';

export default () => {
  const controller = useRef(new AbortController());
  const [state, persist] = useState(reducers.initialize());
  const API = useCallback(() => {}, []);
  const watch = useCallback((promise: Promise<any>) => {
    const validity = new Validity();
    const toggle = (enabled = true) => {
      const {
        current: { signal },
      } = controller;
      const method = enabled ? 'addEventListener' : 'removeEventListener';
      const { [method]: emit } = signal;

      return emit.call(signal, 'abort', validity.expire);
    };
    const resolve = (response: any) => {
      persist(reducers.resolve());

      return Promise.resolve(response);
    };
    const reject = (response: Error) => {
      persist(reducers.reject(response));

      return Promise.reject(response);
    };
    const release = () => toggle(false);

    toggle();
    persist(reducers.attempt());

    return validity.check(promise).then(resolve).catch(reject).finally(release);
  }, []);
  const abort = useCallback(() => controller.current.abort(), []);

  useEffect(() => abort, [abort]);

  return Object.assign(API, { abort, watch }, state);
};
