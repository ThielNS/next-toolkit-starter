import type { AppProps } from 'next/app';
import AppConfigs from '@/core/configs/AppConfigs';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppConfigs>
      <Component {...pageProps} />
    </AppConfigs>
  );
}

export default App;
