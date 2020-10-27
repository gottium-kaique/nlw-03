import 'styled-components'
import theme, { ThemeInterface } from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}