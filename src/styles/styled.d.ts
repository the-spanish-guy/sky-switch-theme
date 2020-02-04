import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      tempo: string;
    },

    table: {
      alo: string;
    },

    sky: {
      img: string,
      star: string,
      shadow1: string,
      shadow2: string
    }
  }
}