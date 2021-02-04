import React, { lazy } from 'react';
import { subRHome } from './subRoutes';

import { IRoute } from './config';

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: <div> Loading... </div>,
  },
  {
    path: '/sign-in',
    exact: false,
    private: false,
    component: lazy(() => import('../pages/connection/SignIn')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/sign-up',
    exact: false,
    private: false,
    component: lazy(() => import('../pages/connection/SignUp')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/home',
    component: lazy(() => import('./../pages/home')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: subRHome,
  },
  // {
  // path: '/protected',
  // component: lazy(() => import('../components/Protected')),
  // exact: false,
  // private: true,
  // fallback: <div> Loading... </div>
  // }
];
