import "styled-components";
import { theme } from "../../global/theme/theme";

declare module "styled-components" {
  type ThemeType = typeof theme.dark;

  export interface DefaultTheme extends ThemeType {}
}
