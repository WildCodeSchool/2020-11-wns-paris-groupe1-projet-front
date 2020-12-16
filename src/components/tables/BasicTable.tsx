import React from "react"
import { useQuery } from "@apollo/client"

import GET_FILES from "../../apollo/queries/courses"

import { makeStyles } from "@material-ui/core/styles"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
}from "@material-ui/core"

import ClearIcon from "@material-ui/icons/Clear"
import CreateIcon from "@material-ui/icons/Create"

interface File {
  _id: string
  title: string
  description: string
  url: string
  datetime: string
  category: string
}

interface Data {
  files: Array<{ _id: string; title: string; description: string; url: string; datetime: string; category: string }>
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function BasicTable(): JSX.Element {
  const classes = useStyles()
  const { data, loading, error } = useQuery<Data>(GET_FILES, { pollInterval: 500 })

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Erreur</p>
  const rows = data?.files

  const timeStampToISOString = (timestamp) => {
    const data = new Date(parseFloat(timestamp))
    const day = data.getDate()
    const month = data.getMonth() + 1
    const year = data.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <>
      <TableContainer component={Paper} style={{ margin: "20px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}>
                Title
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}>
                Description
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}>
                Categorie
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}>
                URL
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}>
                Date
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "20px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row: File, i) => (
                <TableRow key={i} hover>
                  <TableCell component="th" scope="row" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    {row.title}
                  </TableCell>
                  <TableCell align="left" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    {row.description}
                  </TableCell>
                  <TableCell align="left" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    {row.category}
                  </TableCell>
                  <TableCell align="left" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    {row.url}
                  </TableCell>
                  <TableCell align="left" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    {timeStampToISOString(row.datetime)}
                  </TableCell>
                  <TableCell align="left" style={{ fontFamily: "Lato", cursor: "pointer" }}>
                    <IconButton>
                      <CreateIcon style={{ fontSize: "16px" }} />
                    </IconButton>
                    <IconButton>
                      <ClearIcon style={{ color: "red", fontSize: "16px" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
