import type { AppProps } from 'next/app';

import { AvatarContextProvider } from 'contexts/AvatarContext';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AvatarContextProvider>
        <Component {...pageProps} />
      </AvatarContextProvider>
    </ThemeProvider>
  );
}

export default App;
