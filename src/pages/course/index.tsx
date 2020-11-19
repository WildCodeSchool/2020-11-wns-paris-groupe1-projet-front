import React from "react"
import Container from "@material-ui/core/Container"
import CourseForm from "./CourseForm"
import BasicTable from "../../components/tables/BasicTable"

export default function Course(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <CourseForm />
      <BasicTable />
    </Container>
  )
}
