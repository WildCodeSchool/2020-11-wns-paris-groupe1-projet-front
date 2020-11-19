import React from "react"
import Container from "@material-ui/core/Container"
import UploadForm from "./UploadForm"
import BasicTable from "../Table/BasicTable"

export default function UploadLayout(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <UploadForm />
      <BasicTable />
    </Container>
  )
}
