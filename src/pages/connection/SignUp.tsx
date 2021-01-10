import React from 'react';
import FormSignUp from '../../components/form/FormSignUp';
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

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <FormSignUp />
      </div>
    </div>
  )
}

export default SignUp