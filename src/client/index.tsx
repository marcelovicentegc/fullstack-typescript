import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createUploadLink } from "apollo-upload-client";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import "./main.css";
import { Routes } from "./routes/index";

declare let module: any;

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path, source, positions }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    createUploadLink({
      uri: "http://127.0.0.1:8080/api/playground",
      credentials: "include"
    })
  ]),
  cache: new InMemoryCache()
});

class App extends React.Component<{}, {}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
