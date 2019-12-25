import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./profile";
import Connection from "./connection";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to = {"/profile"} />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/connection" render={() => <Connection />} />
    </Switch>
  );
};
export default Routes;
