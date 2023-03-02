import * as React from "react";
import Head from "next/head";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createCache from "@emotion/cache";
import "../styles/globals.css";
import GeneralContextProvider from "@/providers/generalContext";
import { NotistackProvider } from "@/providers/noti";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NotistackProvider>
          <GeneralContextProvider>
            <Component {...pageProps} />
          </GeneralContextProvider>
        </NotistackProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
