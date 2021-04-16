import React, { useState, useContext, useEffect } from "react";
import Navigation, { NavDefault } from "../home/Navigation";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Grid,
  Button,
  Checkbox,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import MuiPhoneNumber from "material-ui-phone-number";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { spacing } from "@material-ui/system";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Footer from "../home/Footer";
import { handleStateData } from "./handleStateData";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#757575",
    textDecoration: "none",
  },
});

const btntheme = createMuiTheme({
  palette: {
    primary: {
      main: "#55a0cc",
    },
  },
});


function TabContainer(props) {
  const { value, index } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "300%" }}
      autoFocus
    >
      <Typography component="div" style={{ padding: 8 * 3 }}>
        <div role="tabpanel" hidden={value !== index}>
          {props.children}
        </div>
      </Typography>
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
};

export const UserRegistrationForm = ({setFirstName, setLastName,
setUserName, setPhoneNumber, setEmail, setPassword, registerUser}) => {
  const classes = useStyle();

  return (
    <TabContainer>
      <ThemeProvider theme={btntheme}>
        <form
          className={classes.form}
          onSubmit={registerUser}
          style={{ display: "inline-block" }}
        >
          <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={12} sm={6} style={{ padding: "10px" }}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "10px" }}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "10px" }}>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "10px" }}>
              {/* <MuiPhoneNumber name="phone" label="Phone Number" data-cy="user-phone" defaultCountry={"us"} value={phones} onChange={handlePhoneChange}/> */}
              <TextField
                onChange={(e) => setPhoneNumber(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="phonenum"
                label="Phone Number"
                name="phonenumber"
                autoComplete="phonenumber"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
              />
            </Grid>
            <Grid direction="column">
              <Grid item direction="row">
                <Checkbox
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                />
                <Link className={classes.linkStyle} to="/terms">
                  {" "}
                  Terms and Conditions{" "}
                </Link>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Link to="/dashboard" style={{ textDecoration: "none" }}></Link>
                <Button
                  type="submit"
                  component="button"
                  variant="contained"
                  color="primary"
                  style={{ color: "white" }}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </TabContainer>
  );
};
