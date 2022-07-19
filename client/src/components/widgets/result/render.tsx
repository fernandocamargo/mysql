import { useMemo } from 'react';

import * as Types from './types';
import use from './hooks';

export default (({ className, ...props }) => {
  const { dangerouslySetInnerHTML, i18n, id, number, onInput, saving } =
    use(props);
  const title = useMemo(
    () => (saving.pending ? 'Saving...' : ''),
    [saving.pending]
  );

  return (
    <tr className={className}>
      <td>{id}</td>
      <td
        aria-busy={saving.pending}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        onInput={onInput}
        title={title}
        contentEditable
        suppressContentEditableWarning
      />
      <td>{i18n}</td>
      <td>{number}</td>
    </tr>
  );
}) as Types.Default;
