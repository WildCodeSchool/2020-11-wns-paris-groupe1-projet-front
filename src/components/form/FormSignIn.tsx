import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../../apollo/queries/login";
import { useHistory } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
        <Link to="#">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles<any>(theme => ({
  paper: {
    // marginTop: theme.spacing(20),
    padding: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(7, 0, 5),
    backgroundColor: "#E1755E",
    color: "#fff"
  },
  link: {
    color: "#4E8591"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [login, { data, loading, error }] = useLazyQuery(LOGIN);

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        variables: {
          email: state.email,
          password: state.password
        }
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (data?.login?.token){ 
      localStorage.setItem('token', data.login.token)
      history.push('/')
    }
  }, [data, history]);
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Connecte toi
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir de moi"
          />
          <Button
            onClick={handleSubmit}
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
                <Link to="/home/sign-up" className={classes.link}>
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
}
