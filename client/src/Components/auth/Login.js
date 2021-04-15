import React, { useState, useContext, useEffect } from "react";
import Navigation, { NavDefault } from "../home/Navigation";
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../home/Footer";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
    color: "#000000",
  },
});

const useStyle = makeStyles({
  cssLabel: {
    color: "#55a0cc",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: " #55a0cc !important",
  },
});

const btntheme = createMuiTheme({
  palette: {
    primary: {
      main: "#55a0cc",
    },
  },
});

function Login(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://127.0.0.1:3000";
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginUser = (e) => {
    e.preventDefault();

    const userAuth = {
      username,
      password,
    };

    fetch(`${URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userAuth),
    })
      .then((response) => console.log(response.json()))
      .catch((err) => console.log(err))
      .then((data) => console.log(data));
  };
  const classes = useStyle();

  const nav = [
    {
      id: 1,
      link: "/#mission",
      label: "Mission",
    },
    {
      id: 2,
      link: "/#impact",
      label: "Impact",
    },
    {
      id: 3,
      link: "/organizations",
      label: "Donate",
    },
  ];

  return (
    <>
      <NavDefault nav={nav} />
      <div>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
          <Grid item>
            <Grid container direction="column" spacing={2} className="login-form">
              <Grid item>
                <ThemeProvider theme={theme}>
                  <Typography component="h1" variant="h3">
                    Log In
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid item>
                <form onSubmit={loginUser}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <ThemeProvider theme={btntheme}>
                        <TextField
                          type="text"
                          placeholder="Username"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={username}
                          InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused } }}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                          autoFocus
                        />
                      </ThemeProvider>
                    </Grid>
                    <Grid item>
                      <ThemeProvider theme={btntheme}>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={password}
                          InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused } }}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </ThemeProvider>
                    </Grid>
                    <Grid item>
                      <ThemeProvider theme={btntheme}>
                        <Button variant="contained" color="primary" type="submit" className="button-block" style={{ color: "white" }}>
                          LOGIN
                        </Button>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <ThemeProvider theme={theme}>
                  <p>Don't Have An Account?</p>
                </ThemeProvider>
                <Link href="signup" to="/signup">
                  {" "}
                  <a style={{ color: "#55a0cc" }}>Sign Up </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Login;
