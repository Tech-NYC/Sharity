import React from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Organizations from "./Components/OrganizationsList";
import UserViewOrg from "./Components/UserViewOrg";
import { UserProvider } from "./contexts/UserContext.js";

//userdashboard link is "/dashboard"
//organization dashboard link is "/orgdashboard"
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
      });
    //need to make another fetch request to get the avatar of the org which is in users info
    return () => {
      isCurrent = false;
    };
  }, [thing]);

  // console.log(org)
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/organizations" component={Organizations} />
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
