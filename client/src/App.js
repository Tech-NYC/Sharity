import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Organizations from "./Components/OrganizationsList";
import Privacy from "./Components/legal/Privacy";
import Terms from "./Components/legal/Terms";
import Contact from "./Components/legal/Contact";
import UserViewOrg from "./Components/UserViewOrg";
import { UserProvider, UserContext } from "./contexts/UserContext.js";
import { NavDefault, NavDonator, NavOrganization } from "./Components/home/Navigation";
import OrgProfile from "./Components/profiles/OrgProfile";
import UserProfile from "./Components/profiles/UserProfile";

const OrgContext = React.createContext();

function Profile() {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/login"></Redirect>;
  } else if (user.is_organization) {
    return <OrgProfile></OrgProfile>;
  } else {
    return <UserProfile></UserProfile>;
  }
}

function Nav() {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return <NavDefault></NavDefault>;
  } else if (user.is_organization) {
    return <NavOrganization></NavOrganization>;
  } else {
    return <NavDonator></NavDonator>;
  }
}

function App() {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";
  const [org, setOrg] = React.useState("");
  const [thing, setThing] = React.useState(0);

  React.useEffect(() => {
    let isCurrent = true;
    fetch(`${URL}/api/organizations/list`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isCurrent) {
          data.map((name) => {
            setOrg(name.name);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      isCurrent = false;
    };
  }, [thing]);

  let orgName = org.split(" ").join("");
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/userpage" component={UserProfile}></Route>
            <Route path="/organizations" component={Organizations} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <OrgContext.Provider value={orgName}>
              <Route path="/:value" exact render={(props) => <UserViewOrg {...props} />} />
            </OrgContext.Provider>
          </Switch>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
