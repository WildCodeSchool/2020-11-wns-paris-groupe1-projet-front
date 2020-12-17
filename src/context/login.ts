import {createContext} from 'react';

export const isLoggedIn = !!localStorage.getItem('token')

export const LoginContext = createContext({});
