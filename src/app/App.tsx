import 'normalize.css';
import { GlobalStyle, theme, store, persistor } from './lib';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import './lib';
import { AllRoutes } from './lib/routes/AllRoutes';
import { Toaster } from 'react-hot-toast';
import { setAuthTokenHeader } from 'shared/index';

export const App = () => {
  const token = store.getState().authState.accessToken;

  useEffect(() => {
    if (token) {
      setAuthTokenHeader(token);
    }
  }, [token]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Toaster position="top-center" reverseOrder={false} />
            <Suspense fallback={null}>
              <AllRoutes />
            </Suspense>
            <GlobalStyle />
          </HashRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
