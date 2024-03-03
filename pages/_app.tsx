import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/fonts.css"
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#7C3AED"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
