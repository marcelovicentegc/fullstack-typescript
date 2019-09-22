import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HelloWorldConnector } from "../modules/helloWorld/connectors/HelloWorldConnector";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={HelloWorldConnector} />
      </Switch>
    </BrowserRouter>
  );
};
