import '@/styles/globals.css'
import "../styles/fonts.css"
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#7C3AED" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
