import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';
import { LoginContext, isLoggedIn } from '../context/login';

const RouteWithSubRoutes = (route: IRoute) => (
  <Suspense fallback={route.fallback}>
    <LoginContext.Provider value={isLoggedIn}>
      <Route
        path={route.path}
        render={(props) => (route.redirect ? (
          <Redirect to={route.redirect} />
        ) : route.private ? (
          isLoggedIn ? (
            route.component && (
            <route.component {...props} routes={route.routes} />
            )
          ) : (
            <Redirect to="/sign-in" />
          )
        ) : (
          route.component && (
          <route.component {...props} routes={route.routes} />
          )
        ))}
      />
    </LoginContext.Provider>
  </Suspense>
);

export default RouteWithSubRoutes;
