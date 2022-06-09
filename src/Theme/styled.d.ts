import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    widthDimensionCalculation: (pixels: number) => number;
    heightDimensionCalculation: (pixels: number) => number;
    fontSize: {
      sm: number;
      s: number;
      md: number;
      lg: number;
      xlg: number;
    };
    colors: {
      white: string;
      black: string;
      primary: string;
    };
  }
}
