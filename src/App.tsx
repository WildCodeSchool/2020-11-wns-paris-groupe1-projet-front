import React from "react";
import api from "./apollo";
import { ApolloProvider } from "@apollo/client";


import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import LightTheme from "../src/themes/light-theme";

import Router from "./router/Router"
import {routes} from "./router/routes"

const App = () => {
  //localStorage.setItem("token", "azertyuokiop");
  return (
    <ApolloProvider client={api}>
      <CssBaseline />
      <StyledThemeProvider theme={LightTheme}>
        <MuiThemeProvider theme={LightTheme}>
          <Router routes={routes} />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ApolloProvider>
  );
}

export default App
