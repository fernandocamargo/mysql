import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import { report } from 'tools';
import { Root } from 'components';

import * as Types from './types';

export const check = () => document.getElementById('root') || Promise.reject();

export const debug = () => void report(console.log);

export const initialize = (element: Types.Element) => createRoot(element);

export const render = (root: Types.Root) => root.render(createElement(Root));
