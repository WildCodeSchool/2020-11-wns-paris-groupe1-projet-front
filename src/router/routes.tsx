import React, { lazy } from 'react';

import { IRoute } from './config';

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/dashboard',
    fallback: <div> Loading... </div>,
  },
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../pages/dashboard')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/planning',
    exact: true,
    component: lazy(() => import('../pages/planning')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/courses',
    exact: true,
    component: lazy(() => import('../pages/courses')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/promotion',
    exact: true,
    component: lazy(() => import('../pages/promotion')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/exercises',
    exact: true,
    component: lazy(() => import('../pages/exercises')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/sign-in',
    exact: true,
    component: lazy(() => import('../pages/connection/SignIn')),
    fallback: <div> Loading... </div>,
  },
  {
    path: '/sign-up',
    exact: true,
    component: lazy(() => import('../pages/connection/SignUp')),
    fallback: <div> Loading... </div>,
  },
];
