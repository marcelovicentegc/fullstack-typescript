import * as React from "react";
import { createMemoryHistory, MemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { Provider } from "mobx-react";
import { rootStore } from "../stores/RootStore";

export const renderWithRouterAndProvider = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  }: { route?: string; history?: MemoryHistory<any> } = {}
) => {
  return {
    ...render(
      <Provider {...rootStore}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    history,
    rootStore
  };
};
