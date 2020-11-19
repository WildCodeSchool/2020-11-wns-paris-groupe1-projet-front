import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import GET_FILES from "../../schemas/lessonSchema"
import { useQuery } from "@apollo/client"

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
  const { data, loading, error } = useQuery<Data>(GET_FILES)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Erreur</p>
  const rows = data?.files

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Categorie</TableCell>
              <TableCell align="right">Url</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row: File) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.url}</TableCell>
                  <TableCell align="right">{row.datetime}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
