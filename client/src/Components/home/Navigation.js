import React, { createContext, useContext, useState, useEffect } from "react";
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
    color: "#424242",
    textDecoration: "none",
  },
});

function Logout() {
  console.log("logging out");
  const { user, setUser } = useContext(UserContext);
  document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  setUser({});
}

export const NavDefault = ({ nav }) => {
  const classes = useStyle();
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {/* <Link to="/#header"><img src={logo} style={{width:"15%", height:"5%"}}/></Link> */}
            <a href="/#header">
              <img src={logo} style={{ width: "15%", height: "5%" }} />
            </a>
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%" }}>
            <a href={"/#mission"} style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Mission
            </a>
            <a href={"/#impact"} style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Impact
            </a>
            <a href={"/organizations"} style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
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
  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <Link to="/#header">
              <img src={logo} style={{ width: "15%", height: "5%" }} />
            </Link>
            {/* <a href="/#header">
              <img src={logo} style={{ width: "15%", height: "5%" }} />
            </a> */}
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%" }}>
            {/* <a href={"/#mission"} style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Mission
            </a> */}
            <Link to="/#mission" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Mission
            </Link>
            <Link to="/#impact" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Impact
            </Link>
            <Link to="/organizations" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Donate
            </Link>
            <Link to="/profile" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              {user.username}
            </Link>
          </Typography>
          <Link className={classes.linkStyle} to="/">
            <Button size="small" variant="outlined" onClick="Logout()">
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
  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <Link to="/#header">
              <img src={logo} style={{ width: "15%", height: "5%" }} />
            </Link>
            {/* <a href="/#header">
              <img src={logo} style={{ width: "15%", height: "5%" }} />
            </a> */}
          </Typography>
          <Typography variant="h6" className={classes.root} style={{ marginLeft: "4%" }}>
            <Link to="/#mission" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Mission
            </Link>
            <Link to="/#impact" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              Impact
            </Link>

            <Link to="/profile" style={{ paddingRight: "10%", display: "inline-flex", textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}>
              {user.username}
            </Link>
          </Typography>
          <Link className={classes.linkStyle} to="/">
            <Button size="small" variant="outlined" onClick="Logout()">
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
