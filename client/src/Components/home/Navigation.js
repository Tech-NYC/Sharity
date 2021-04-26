import React, { useContext } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext.js";
import logo from "../../img/sharitylogo.svg";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#42424",
    textDecoration: "none",
    fontFamily: "Fira Sans",
  },
});

export const NavDefault = ({ nav }) => {
  const classes = useStyle();
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <AppBar position="sticky" color="default" style={{ marginRight: "1rem" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <a href="/#header">
              <img src={logo} alt="Animated Sharity logo of two hands intertwined, next to the word sharity." style={{ width: "10rem" }} />
            </a>
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%", marginRight: "0", textAlign: "right" }}>
            <a href={"/#mission"} className={classes.linkStyle} style={{ paddingRight: "5rem", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Mission
            </a>
            <a href={"/#partners"} className={classes.linkStyle} style={{ paddingRight: "5rem", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Partners
            </a>
            <a href={"/organizations"} className={classes.linkStyle} style={{ paddingRight: "5rem", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Donate
            </a>
          </Typography>
          <Link className={classes.linkStyle} to="/login">
            <Button size="small" variant="outlined">
              Log In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const NavDonator = ({ nav }) => {
  const classes = useStyle();
  const { user, setUser } = useContext(UserContext);
  function logout() {
    document.cookie += "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
  }
  return (
    <>
      <AppBar position="sticky" color="red">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <Link to="/#header">
              <img src={logo} alt="Two hands intertwined next to Sharity spelled out in letters." style={{ width: "15%", height: "5%" }} />
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%", marginRight: "0", textAlign: "right" }}>
            <Link to="/organizations" className={classes.linkStyle} style={{ paddingRight: "5rem", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Donate
            </Link>
            <Link to="/profile" className={classes.linkStyle} style={{ paddingRight: "5rem", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              My Donations
            </Link>
          </Typography>
          <Link className={classes.linkStyle} to="/">
            <Button size="small" variant="outlined" onClick={logout}>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const NavOrganization = ({ nav }) => {
  const classes = useStyle();
  const { user, setUser } = useContext(UserContext);
  function logout() {
    document.cookie += "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setUser(null);
  }
  return (
    <>
      <AppBar position="sticky" color="red">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <Link to="/#header">
              <img src={logo} style={{ width: "15%" }} />
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%", marginRight: "0", textAlign: "right" }}>
            <Link to="/dashboard" className={classes.linkStyle} style={{ paddingRight: "10%", fontWeight: "900", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Dashboard
            </Link>
          </Typography>
          <Link className={classes.linkStyle} to="/">
            <Button size="small" variant="outlined" onClick={logout}>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
