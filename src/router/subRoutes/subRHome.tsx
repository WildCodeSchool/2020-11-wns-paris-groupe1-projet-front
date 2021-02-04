import React, { lazy } from 'react';
import { IRoute } from '../config';

export const subRHome: IRoute[] = [
  {
    path: 'home/',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/dashboard')),
    fallback: <div> Loading... </div>,
  },
  {
    path: 'home/planning',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/planning')),
    fallback: <div> Loading... </div>,
  },
  {
    path: 'home/courses',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/courses')),
    fallback: <div> Loading... </div>,
  },
  {
    path: 'home/promotion',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/promotion')),
    fallback: <div> Loading... </div>,
  },
  {
    path: 'home/exercises',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/exercises')),
    fallback: <div> Loading... </div>,
  },
  {
    path: 'home/home/tools',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/tools')),
    fallback: <div> Loading... </div>,
  },
];
