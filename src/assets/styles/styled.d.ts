import 'styled-components'
import {AppThemeType} from './appTheme'

declare module 'styled-components' {
   export interface DefaultTheme extends AppThemeType {
   }
}