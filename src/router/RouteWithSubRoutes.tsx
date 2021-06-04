import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';
import { LoginContext, isLoggedIn } from '../context/login';

const RouteWithSubRoutes = (route: IRoute) => {
  const { fallback, path } = route;

  return (
    <Suspense fallback={fallback}>
      <LoginContext.Provider value={isLoggedIn}>
        <Route
          path={path}
          render={(props) => (route.redirect ? (
            <Redirect to={route.redirect} />
          ) : (
            route.component && (
            <route.component {...props} routes={route.routes} />
            )
          ))}
        />
      </LoginContext.Provider>
    </Suspense>
  );
};

export default RouteWithSubRoutes;
