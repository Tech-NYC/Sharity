import React from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Organizations from "./Components/OrganizationsList";
import Privacy from "./Components/legal/Privacy";
import Terms from "./Components/legal/Terms";
import Contact from "./Components/legal/Contact";
import UserViewOrg from "./Components/UserViewOrg";
import { UserProvider } from "./contexts/UserContext.js";
import { NavDefault } from "./Components/home/Navigation";
import {nav} from './Components/home/navlinks'
import OrgProfile from "./Components/profiles/OrgProfile"

const OrgContext = React.createContext();

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
    })
    return() => {
        isCurrent = false;
    }

  }, [thing]);

  
  // const orgName = org.split(" ").join("")
  // console.log(orgName)
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <NavDefault nav={nav}></NavDefault>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/organizations" component={Organizations} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/contact" component={Contact} />
            <Route path='/profile' component={OrgProfile} />
            <OrgContext.Provider value={org}>
              <Route path="/:value" exact render={(props) => <UserViewOrg {...props} />} />
            </OrgContext.Provider>
          </Switch>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
