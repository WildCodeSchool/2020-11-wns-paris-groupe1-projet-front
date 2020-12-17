import React, { useState } from 'react';
import { useMutation } from "@apollo/client"
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { LOGIN_MUTATION } from "../../apollo/mutations/login";
import { AUTH_TOKEN } from '../../constant'; 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to='#'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(7, 0, 5),
    backgroundColor: '#E1755E',
    color: '#fff'
  },
  link: {
    color: '#4E8591',
}
}));

// interface Data {
//   login: { email: string, password: string }
// }

export default function SignIn() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const authToken = localStorage.getItem(AUTH_TOKEN);
  console.log(authToken);
  
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: state.email,
      password: state.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push('/');
    }
  });


  const handleInputChange = ({ target: { name, value } }: any): void => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    try {
      // await graphql request (post email and password)
      
      history.push('/dashboard')
    } catch(err) {
      // diplays error message 
      console.log(err);
      
      history.push("/sign-in")
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Connecte toi
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            value= {state.email}
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            value= {state.password}
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir de moi"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" className={classes.link}>
                Mot de passe oublié ?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/sign-up' className={classes.link}>
                {"Si tu n'as pas encore de compte, crée-toi en un !"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};