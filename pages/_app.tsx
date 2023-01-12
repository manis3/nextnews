import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.Session}>
      <ChakraProvider>
        {" "}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}  
