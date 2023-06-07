import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/users" component={UsersList}></Route>
    </div>
  );
};

export default Routes;
