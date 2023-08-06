/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";

import theme from "@/styles";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      white50: string;
      white100: string;
      white200: string;
      white300: string;
      white400: string;
      white500: string;
      white600: string;
      white700: string;
      white800: string;
      white900: string;

      blue50: string;
      blue100: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;
      blue800: string;
      blue900: string;
    };
  }
}
