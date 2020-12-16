import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import api from "./apollo/api";
import Course from "./pages/course";
import { ApolloProvider } from "@apollo/client";
import SideBar from "./components/SideBar";

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
      <SideBar></SideBar>
      <div
        className="App-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Course />
      </div>
    </ApolloProvider>
  );
}
