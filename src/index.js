import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './estilo';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
