// create your theme
export const theme = {
  colors: {
    white: '#ffffff',
    primaryBlue: '#2C75C8',
    colorText: '#333333',
    errorRed: '#DD1919',
    pageBackground: '#F5F8FA',
    borderInputGrey: '#CACACA',
    greyColorText: '#9E9E9E',
    lightBlueBackground: '#ECF5FF',
    lightGreen: '#19DDA2',
    disabledGrey: '#EDEDED',
    statusGreen: '#19DDA2',
    orangeStatus: '#F59E0B',
    hoverButton: '#3D8FE3',
  },
  bottomLine: '1px solid rgb(237, 237, 237)',
};

// typing theme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      primaryBlue: string;
      colorText: string;
      errorRed: string;
      pageBackground: string;
      borderInputGrey: string;
      greyColorText: string;
      lightBlueBackground: string;
      lightGreen: string;
      disabledGrey: string;
      statusGreen: string;
      orangeStatus: string;
      hoverButton: string;
    };
    bottomLine: string;
  }
}
