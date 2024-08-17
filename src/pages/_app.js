

import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';  // Ensure the path is correct for your global styles

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
