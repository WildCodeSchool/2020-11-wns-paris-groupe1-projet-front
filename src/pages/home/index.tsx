import React from "react"
import Router from "./../../router/Router"
import {IRoute} from "./../../router/config"

interface IProps {
  routes: IRoute[];
}

const Home: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      <Router routes={routes} />
    hello CI
    </>
  )
}

export default Home;
