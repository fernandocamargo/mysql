declare module 'styled-components' {
  import { ThemedStyledComponentsModule } from 'styled-components';

  import * as Types from 'types/theme';

  export const API: ThemedStyledComponentsModule<Types.Default>;
  export const createGlobalStyle: API.createGlobalStyle;
  export const css: API.css;
  export const keyframes: API.keyframes;
  export const isStyledComponent: API.isStyledComponent;
  export const ServerStyleSheet: API.ServerStyleSheet;
  export const StyleSheetManager: API.StyleSheetManager;
  export const ThemeConsumer: API.ThemeConsumer;
  export const ThemeContext: API.ThemeContext;
  export const ThemeProvider: API.ThemeProvider;
  export const withTheme: API.withTheme;

  export default API.default;
}
