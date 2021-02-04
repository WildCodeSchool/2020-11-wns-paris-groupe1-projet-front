import React from 'react';
import Router from '../../router/Router';
import { IRoute } from '../../router/config';

interface IProps {
  routes: IRoute[];
}

// eslint-disable-next-line react/prop-types
const Home: React.FC<IProps> = ({ routes }) => (
  <>
    <Router routes={routes} />
  </>
);

export default Home;
