import React from "react"
import FormSignIn from '../../components/form/FormSignIn';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
    },
    form: {
      margin: 'auto'
    }
  })
);

import './signIn.css';

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <FormSignIn />
      </div>
    </div>
  )
}

export default SignIn