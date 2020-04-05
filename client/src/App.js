import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route component={NotFound}/>
      </Switch>
  )
}
