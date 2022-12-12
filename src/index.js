import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { store } from 'redux/store.js';

import { App } from './components/App/App.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="mui">
      {/* <Box>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
            <GlobalStyle />
          </PersistGate>
        </Provider>
      </Box> */}
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
