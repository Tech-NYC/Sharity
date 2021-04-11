import React from "react"
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/auth/Login"
import Signup from "./Components/auth/Signup"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
