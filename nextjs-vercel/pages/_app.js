import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('service-worker.js', {
        type: 'module',
        scope: '/',
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
