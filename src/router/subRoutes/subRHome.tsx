import React, { lazy } from 'react';
import {IRoute} from "../config"

export const subRHome: IRoute[] = [
  {
    path: '/home/sign-in',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/connection/SignIn')),
    fallback: <div> Loading... </div>
  },
  {
    path: '/home/sign-up',
    exact: false,
    private: false,
    component: lazy(() => import('../../pages/connection/SignUp')),
    fallback: <div> Loading... </div>
  },
]