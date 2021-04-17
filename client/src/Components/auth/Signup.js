import React, { useState, useContext, useEffect } from "react";
import Navigation, { NavDefault } from "../home/Navigation";
import { AppBar, Paper, Tabs, Tab, Grid, Button, Checkbox } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import MuiPhoneNumber from "material-ui-phone-number";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { spacing } from "@material-ui/system";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Footer from "../home/Footer";
import { handleStateData } from "./handleStateData";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { OrganizationRegistrationForm } from "./OrganizationRegistrationForm";
import { UserContext } from "../../contexts/UserContext.js";
import { Redirect } from "react-router-dom";

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
    <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: "300%" }} autoFocus>
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

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";
  const [state, setState] = React.useState(0);
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);
  // const [phones, setPhone] = React.useState("")
  const handleChange = (event, value) => {
    setState(value);
  };

  function redirectBasedOnUserType() {
    if (user.is_organization) {
      console.log("org authorized");
      return <Redirect to="/profile" />;
    } else {
      console.log("donator authorized", user);
      return <Redirect to="/organizations" />;
    }
  }

  const classes = useStyle();

  // const handlePhoneChange = (val)  => {
  //     if (val) {
  //       setPhone({ phone: val });
  //     }
  // }

  // pass into form as props

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
    console.log("registering user:", data);
    fetch(`${URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  const registerOrganization = (e) => {
    e.preventDefault();
    const data = handleStateData(userData, organizationData, "true");
    console.log("registering org:", data);
    fetch(`${URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  const stateFunctionsObject = {
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setPhoneNumber,
    setPassword,
    setAddress,
    setName,
    registerUser,
    registerOrganization,
  };

  return (
    <>
      <NavDefault nav={nav} />
      <div className={classes.root}>
        <ThemeProvider theme={btntheme}>
          <Tabs value={state} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="User Signup" autoFocus state={0} />
            <Tab label="Organization Signup" state={1} />
          </Tabs>
        </ThemeProvider>
        {state === 0 && <UserRegistrationForm {...stateFunctionsObject} />}
        {state === 1 && <OrganizationRegistrationForm {...stateFunctionsObject} />}
      </div>
      {redirect ? redirectBasedOnUserType() : null}
      <Footer />
    </>
  );
}

export default Signup;
