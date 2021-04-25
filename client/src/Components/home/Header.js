import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const logotheme = createMuiTheme({
  typography: {
    fontFamily: ["Economica", "sans-serif"].join(","),
    color: "#55a0cc",
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root} id="header">
        <div className="header-test">
          <Container>
            <div>
              <ThemeProvider theme={logotheme}>
                <Typography variant="h1" style={{ color: "#55a0cc" }} className="title">
                  {" "}
                  sharity{" "}
                </Typography>
              </ThemeProvider>
            </div>
            <div className="centered">
              <ThemeProvider theme={theme}>
                <Typography variant="h5" className="help" style={{ color: "white", fontSize: "2rem", fontWeight: "1000", textShadow: "black 0px 0px 10px" }}>
                  Help make a difference in the lives of New York City residents and their families today.{" "}
                </Typography>
              </ThemeProvider>
              <a href="#mission" className="btn-custom">
                Learn more
              </a>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
