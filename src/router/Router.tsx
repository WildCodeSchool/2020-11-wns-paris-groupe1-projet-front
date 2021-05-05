import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { IRoute } from './config';

interface IProps {
  routes: IRoute[];
}

// eslint-disable-next-line react/prop-types
const Router: React.FC<IProps> = ({ routes }) => (
  <Switch>
    {routes && routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}
  </Switch>
);

export default Router;
