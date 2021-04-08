import React from "react"
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Home from "./Components/Home"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
