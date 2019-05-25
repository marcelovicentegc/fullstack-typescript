import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CubeConnector from "../modules/cube/CubeConnector";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={CubeConnector} />
      </Switch>
    </BrowserRouter>
  );
};
