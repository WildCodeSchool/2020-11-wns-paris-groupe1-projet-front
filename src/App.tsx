import React from "react"
import api from "./apollo"
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"
import { LoginContext, isLoggedIn } from './context/login'

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import ProtectedRoute from './components/protected-route/ProtectedRoute'
import SignIn from "./pages/sign-in/SignIn"
import SignUp from "./pages/sign-up/SignUp"

import LightTheme from '../src/themes/light-theme';
import CourseForm from "./pages/course/CourseForm";

export default function App() {
  localStorage.setItem('token', 'azertyuiop')
  return (
    <ApolloProvider client={api}>
    <CssBaseline />
      <StyledThemeProvider theme={LightTheme}>
        <MuiThemeProvider theme={LightTheme}>
            <BrowserRouter>
              <Switch >
                <Route exact path ="/sign-in" component={SignIn} />
                <Route  exact path="/sign-up" component={SignUp} />
                <LoginContext.Provider value={isLoggedIn}>
                <ProtectedRoute Component={<CourseForm/>} />
                </LoginContext.Provider>
              </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ApolloProvider>
  );
}
