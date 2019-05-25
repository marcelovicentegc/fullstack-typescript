import * as React from "react";
import * as ReactDOM from "react-dom";
import "./main.scss";
import { Routes } from "./routes/index";

declare let module: any;

class App extends React.Component {
  render() {
    return <Routes />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
