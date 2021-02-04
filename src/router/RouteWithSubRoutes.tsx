import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';
import { LoginContext, isLoggedIn } from '../context/login';
import SideBar from '../components/layouts/SideBar';

const RouteWithSubRoutes = (route: IRoute) => (
  <Suspense fallback={route.fallback}>
    <LoginContext.Provider value={isLoggedIn}>
      <SideBar>
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
              <Redirect to="/home/sign-in" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          ))}
        />
      </SideBar>
    </LoginContext.Provider>
  </Suspense>
);

export default RouteWithSubRoutes;
