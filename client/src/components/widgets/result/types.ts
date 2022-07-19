// import { FC, FormEventHandler } from 'react';
import { FC, SyntheticEvent } from 'react';

import { Default as Result } from 'types/result';

export type Default = FC<PropTypes>;

export type Event = SyntheticEvent & {
  target: HTMLTableCellElement;
};

export type Hook = {
  (props: Partial<PropTypes>): Partial<PropTypes> & {
    dangerouslySetInnerHTML: {
      __html: string;
    };
    saving: {
      pending: boolean;
    };
    onInput: {
      (...params: any): void;
    };
  };
};

export type PropTypes = Result & {
  className: string;
  onInput: {
    (...params: any): void;
  };
};

export type Timeout = ReturnType<any>;
