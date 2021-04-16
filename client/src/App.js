import React from "react"
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/auth/Login"
import Signup from "./Components/auth/Signup"
import Organizations from "./Components/OrganizationsList"
import Privacy from "./Components/legal/Privacy"
import Terms from "./Components/legal/Terms"
import Contact from "./Components/legal/Contact"
//userdashboard link is "/dashboard"
//organization dashboard link is "/orgdashboard"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/organizations' component={Organizations}/>
          <Route path='/privacy' component={Privacy} />
          <Route path='/terms' component={Terms} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
