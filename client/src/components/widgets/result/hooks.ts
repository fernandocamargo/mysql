import { useCallback, useEffect, useRef, useMemo } from 'react';

import { useAsync } from 'hooks';

import * as Types from './types';

export default (({ onInput: input, i18n, id, number, product }) => {
  const timeout = useRef<Types.Timeout>(null);
  const saving = useAsync();
  const dangerouslySetInnerHTML = useMemo(
    () => ({ __html: product }),
    [product]
  );
  const onInput = useCallback(
    ({ target: { innerHTML } }: Types.Event) => {
      const product = innerHTML.trim();
      const trigger = () => void saving.watch(input({ id, product }));

      window.clearTimeout(timeout.current);

      return void (timeout.current = window.setTimeout(trigger, 250));
    },
    [id, input, saving]
  );

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  return {
    dangerouslySetInnerHTML,
    i18n,
    id,
    number,
    onInput,
    product,
    saving,
  };
}) as Types.Hook;
