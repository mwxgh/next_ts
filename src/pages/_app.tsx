import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import GlobalStyle from '@/globalStyle';
import i18n from '@/i18n';
import store from '@/stores';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Component {...pageProps} key={router.asPath} />
        <GlobalStyle />
      </Provider>
    </I18nextProvider>
  );
};

export default MyApp;
