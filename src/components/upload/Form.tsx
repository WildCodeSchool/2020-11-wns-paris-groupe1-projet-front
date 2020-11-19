import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function Form() {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Button variant="contained" color="primary" disableElevation onClick={() => setShowForm(!showForm)}>
        {showForm ? "Fermer le formulaire" : "Ajouter un cours"}
      </Button>
      {showForm && <form className={classes.root} noValidate autoComplete="off">
      <Input
          defaultValue="Nom du fichier"
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          defaultValue="URL"
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          placeholder="Catégorie"
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          defaultValue="Description"
          inputProps={{ "aria-label": "description" }}
        />
      </form>}
    </>
  );
}
