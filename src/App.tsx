import React from "react"
import api from "./apollo"
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import SignIn from "./pages/connection/SignIn"
import SignUp from "./pages/connection/SignUp"

import LightTheme from '../src/themes/light-theme';

export default function App() {

  return (
    <ApolloProvider client={api}>
    <CssBaseline />
      <StyledThemeProvider theme={LightTheme}>
        <MuiThemeProvider theme={LightTheme}>
          <div className="App-header" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BrowserRouter>
              <Switch >
                <Route exact path ="/sign-in" component={SignIn} />
                <Route  exact path="/sign-up" component={SignUp} />
              </Switch>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ApolloProvider>
  )
}
