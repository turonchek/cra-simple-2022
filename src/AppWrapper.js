import React from 'react';
import { App } from './App';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './materialUI/theme';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/system';
import { Provider } from 'react-redux';
import { store } from './services/store';

export function AppWrapper() {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Container>
            <App />
          </Container>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
    </>
  );
}
