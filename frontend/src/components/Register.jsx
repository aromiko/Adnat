import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { register } from "../ducks/actions/Api";
import { useDispatch } from "react-redux";
import adnat from "../images/adnat.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Adnat
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(8)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    color: "#fff",
    margin: theme.spacing(3, 0, 2)
  }
}));

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value);
        }
      }
    };
  };

  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");
  const {
    value: passwordConfirmation,
    bind: bindPasswordConfirmation,
    reset: resetPasswordConfirmation
  } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    resetName();
    resetEmail();
    resetPassword();
    resetPasswordConfirmation();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <CssBaseline />
          <div className={classes.paper}>
            <img src={adnat} className="adnat-logo" width="50%" alt="logo" />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    id="name"
                    label="Name"
                    autoFocus
                    {...bindName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...bindEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    name="password"
                    label="Password (6 characters minimum)"
                    type="password"
                    id="password"
                    {...bindPassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    {...bindPasswordConfirmation}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() =>
                  dispatch(
                    register(name, email, password, passwordConfirmation)
                  )
                }
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;
