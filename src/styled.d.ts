import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      secundaria: string;
    };
    fonts: {
      main: string;
    };
  }
}
