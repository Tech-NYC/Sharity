import React from "react"
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/auth/Login"
import Signup from "./Components/auth/Signup"
import Organizations from "./Components/OrganizationsList"
import UserViewOrg from "./Components/UserViewOrg"

//userdashboard link is "/dashboard"
//organization dashboard link is "/orgdashboard"
const UserContext = React.createContext()

function App () {
  const [org, setOrg] = React.useState("")
  const [thing, setThing] = React.useState(0)
  React.useEffect(() => {
    let isCurrent = true;
    fetch('http://localhost:3000/api/organizations/list').then((res) => {
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
    //need to make another fetch request to get the avatar of the org which is in users info
    return() => {
        isCurrent = false;
    }

  }, [thing]);

console.log(org)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/organizations' component={Organizations}/>
          <UserContext.Provider value={org}>
            <Route path='/:value' render={(props) => <UserViewOrg {...props}/>} />
          </UserContext.Provider>
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
