import React from "react"
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/auth/Login"
import Signup from "./Components/auth/Signup"
import Organizations from "./Components/OrganizationsList"
import UserViewOrg from "./Components/UserViewOrg"
import OrgProfile from "./Components/profiles/OrgProfile"


const UserContext = React.createContext()

function App () {
  const PROD = true;

  const URL = PROD
    ? "https://sharity-technyc.herokuapp.com"
    : "http://localhost:3000";
  const [org, setOrg] = React.useState("")
  const [thing, setThing] = React.useState(0)
  React.useEffect(() => {
    let isCurrent = true;
    fetch(`${URL}/api/organizations/list`).then((res) => {
        return res.json();
    }).then((data) => {
        if(isCurrent){
          data.map((name) => {
            setOrg(name.name)
          })
        }
    })
    .catch ((err) => {
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/organizations' component={Organizations}/>
          <Route path='/profile' component={OrgProfile} />
          <UserContext.Provider value={org}>
            <Route path='/:value' exact render={(props) => <UserViewOrg {...props}/>} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
