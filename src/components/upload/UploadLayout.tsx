import React from "react";
import Container from "@material-ui/core/Container";
import UploadForm from "./UploadForm";
import UploadTable from "./UploadTable";



export default function UploadLayout() {
  return (
    <Container maxWidth="lg">
      <UploadForm />
      <UploadTable />
    </Container>
  );
}
