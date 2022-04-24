import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AvatarContextProvider } from 'contexts/AvatarContext';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AvatarUpload - Croct`s Challenge</title>
        <link
          rel="shortcut icon"
          href="https://croct.com/public/images/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://croct.com/public/images/favicon.png"
        />
        <meta
          name="description"
          content="The <AvatarUpload /> component should allow users to upload images to make it easier for them to recognize key interface elements related to an organization."
        />
      </Head>
      <GlobalStyles />
      <AvatarContextProvider>
        <Component {...pageProps} />
      </AvatarContextProvider>
    </ThemeProvider>
  );
}

export default App;
