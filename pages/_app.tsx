import '@/styles/globals.css'
import "../styles/fonts.css"
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#7C3AED" />
      </Head>
      <ThemeProvider>
        <Script
        async
        defer
        data-domain="mahan-asadi.ir" 
        src="https://plausible.io/js/script.js"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

