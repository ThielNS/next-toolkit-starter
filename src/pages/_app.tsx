import type { AppProps } from 'next/app';
import AppContexts from '@/core/contexts/AppContexts';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppContexts>
      <Component {...pageProps} />
    </AppContexts>
  );
}

export default App;
