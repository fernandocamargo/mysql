import { StrictMode } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { BrowserRouter as Routing } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes/default';
import { App, Clients, Style } from 'components';

import use from './hooks';

export default () => {
  const { persistor, store } = use();

  return (
    <StrictMode>
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading="Loading...">
          <Clients>
            <Routing>
              <Theming theme={theme}>
                <Style />
                <App />
              </Theming>
            </Routing>
          </Clients>
        </StatePersistence>
      </StateManager>
    </StrictMode>
  );
};
