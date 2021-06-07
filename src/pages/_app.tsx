import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

import { GlobalStyle } from '../styles/globalStyles';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
