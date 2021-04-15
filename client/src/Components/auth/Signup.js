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

const logotheme = createMuiTheme({
  typography: {
    fontFamily: ["Economica", "sans-serif"].join(","),
    color: "#55a0cc",
  },
});

const btntheme = createMuiTheme({
  palette: {
    primary: {
      main: "#55a0cc",
    },
  },
});

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

//make onsubmit and post request to forms when user or org clicks to let backend know which is which
//make the org form post to the user table w the boolean true, and also the org table

function Signup() {
  const PROD = true;

  const URL = PROD
    ? "https://sharity-technyc.herokuapp.com"
    : "http://127.0.0.1:3000";
  const [state, setState] = React.useState(0);
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  // const [phones, setPhone] = React.useState("")
  const handleChange = (event, value) => {
    setState(value);
  };

  const classes = useStyle();

  // const handlePhoneChange = (val)  => {
  //     if (val) {
  //       setPhone({ phone: val });
  //     }
  // }

  const userData = {
    first_name,
    last_name,
    username,
    email,
    phone_number,
    password,
  };

  const organizationData = {
    name,
    address,
  };

  const registerUser = (e) => {
    e.preventDefault();
    const data = handleStateData(userData, organizationData, "false");

    fetch(`${URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  };

  const registerOrganization = (e) => {
    e.preventDefault();
    const data = handleStateData(userData, organizationData, "true");

    fetch(`${URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response.json()))
      .catch(err => console.log(err))
      .then((data) => console.log(data))
  };

  return (
    <>
      <NavDefault nav={nav} />
      <div className={classes.root}>
        <ThemeProvider theme={btntheme}>
          <Tabs
            value={state}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="User Signup" autoFocus state={0} />
            <Tab label="Organization Signup" state={1} />
          </Tabs>
        </ThemeProvider>
        {state === 0 && (
          <TabContainer>
            <ThemeProvider theme={btntheme}>
              <form
                className={classes.form}
                onSubmit={registerUser}
                style={{ display: "inline-block" }}
              >
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                >
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
                      <Link
                        to="/dashboard"
                        style={{ textDecoration: "none" }}
                      ></Link>
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
        )}
        {state === 1 && (
          <TabContainer style={{ justifyConten: "center" }}>
            <ThemeProvider theme={btntheme}>
              <form
                className={classes.form}
                onSubmit={registerOrganization}
                noValidate
                style={{ display: "inline-block" }}
              >
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12} sm={6} style={{ padding: "10px" }}>
                    <TextField
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="orgname"
                      name="orgName"
                      variant="outlined"
                      required
                      fullWidth
                      id="orgName"
                      label="Organization Name"
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
                    {/* <MuiPhoneNumber name="phone" label="Phone Number" data-cy="user-phone" defaultCountry={"us"} value={phones} onChange={handlePhoneChange}/> */}
                    <TextField
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 10 }}
                      type="tel"
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
                  <Grid item xs={12} style={{ padding: "10px" }}>
                    <TextField
                      onChange={(e) => setAddress(e.target.value)}
                      variant="outlined"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="address"
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
                      <Link
                        to="/orgdashboard"
                        style={{ textDecoration: "none" }}
                      ></Link>
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
        )}
      </div>
      <Footer />
    </>
  );
}

export default Signup;
