import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;


