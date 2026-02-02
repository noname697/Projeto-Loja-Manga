import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primaria: string;
      secundaria: string;
      branco: string;
      preto: string;
    };
    fonts: {
      main: string;
    };
  }
}
