import React from 'react';
import { App } from './App';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './materialUI/theme';
// import {Container} from '@mui/material/Container';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/system';

export function AppWrapper() {
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
          <App />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
    </>
  );
}
