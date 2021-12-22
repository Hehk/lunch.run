import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Lunch.run</title>
      <meta name="description" content="Kyle Henderson's special place" />
    </Head>

    <Component {...pageProps} />
  </>
}
export default MyApp;
