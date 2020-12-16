import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './pages/connection/SignIn';
import SignUp from "./pages/connection/SignUp"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route  path="/sign-up" component={SignUp} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
