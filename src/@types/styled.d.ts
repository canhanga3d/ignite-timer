import 'styled-components';
import { defaultTheme } from './../styles/themes/defaultTheme';
type ThemeType = typeof defaultTheme;
declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
