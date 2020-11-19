import React from "react"
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import client from "../src/services/index2"
import UploadLayout from "./components/upload/UploadLayout"
import { ApolloProvider } from "@apollo/client"

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
    <ApolloProvider client={client}>
      <div className="App-header" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <UploadLayout />
      </div>
    </ApolloProvider>
  )
}
