export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  colors: {
    gray600: '#3D485F',
    gray500: '#495567',
    gray400: '#677489',
    gray300: '#C3CBD5',
    gray200: '#F2F5F8',
    orange: '#C64D32',
    blue: '#3F80FF',
    border: '#C7CDD3',
    white: '#FFFFFF',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
