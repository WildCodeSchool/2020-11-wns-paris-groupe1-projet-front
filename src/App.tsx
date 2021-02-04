import React from 'react';
import { ApolloProvider } from '@apollo/client';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import api from './apollo';

import LightTheme from './themes/light-theme';

import Router from './router/Router';
import { routes } from './router/routes';

const App = () => (
  <ApolloProvider client={api}>
    <CssBaseline />
    <StyledThemeProvider theme={LightTheme}>
      <MuiThemeProvider theme={LightTheme}>
        <Router routes={routes} />
      </MuiThemeProvider>
    </StyledThemeProvider>
  </ApolloProvider>
);

export default App;
