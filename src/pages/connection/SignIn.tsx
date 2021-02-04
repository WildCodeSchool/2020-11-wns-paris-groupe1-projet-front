import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormSignIn from '../../components/form/FormSignIn';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
  },
  form: {
    margin: 'auto',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <FormSignIn />
      </div>
    </div>
  );
};

export default SignIn;
