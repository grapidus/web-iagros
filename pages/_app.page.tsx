import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../services/store';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
