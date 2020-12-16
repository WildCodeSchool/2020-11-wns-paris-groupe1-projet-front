import React from "react"
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import api from "./apollo/api"
// import Course from "./pages/course"
import {  Link, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"

import SignIn from "./pages/connection/SignIn"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   })
// )

export default function ButtonAppBar() {
  // const classes = useStyles()

  return (
    <ApolloProvider client={api}>
      <div className="App-header" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button>
          <Link to='/sign-in'>Connexion</Link>
          </button>
        <button>
          <Link to='/sign-up'>Créer un compte</Link>
        </button>

        <Switch >
          {/* <Route exact path ="/sign-in" component={SignIn} /> */}
        </Switch>
      </div>
    </ApolloProvider>
  )
}
