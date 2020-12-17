import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { LoginContext } from '../../context/login'

import ADD_FILE from "../../apollo/mutations/add-file"

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { Button, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
)

export default function CourseForm() {
  // const isLoggedIn = React.useContext(LoginContext) // A mettre dans chaque composant qui devra être protégé
  
  const classes = useStyles()
  const [addFile] = useMutation(ADD_FILE)
  const [showForm, setShowForm] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    url: "",
  })

  const handleChange = (e: any) => {
    console.log(e.target.name)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const response = await addFile({
        variables: {
          file: {
            title: data.title,
            description: data.description,
            category: data.category,
            url: data.url,
          },
        },
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Annuler" : "Ajouter un cours"}
      </Button>
      {showForm && (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField value={data.title} onChange={handleChange} name="title" placeholder="Nom du fichier" inputProps={{ "aria-label": "description" }} />
          <TextField value={data.description} onChange={handleChange} name="description" placeholder="Description" inputProps={{ "aria-label": "description" }} />
          <TextField value={data.category} onChange={handleChange} name="category" placeholder="Catégorie" inputProps={{ "aria-label": "description" }} />
          <TextField value={data.url} onChange={handleChange} name="url" placeholder="url" inputProps={{ "aria-label": "description" }} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Valider
          </Button>
        </form>
      )}
    </div>
  )
}