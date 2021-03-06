import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createUploadLink } from "apollo-upload-client";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "./main.scss";
import { rootStore } from "./stores/RootStore";
import { Routes } from "./routes";

const serverPort = process.env.CLIENT_TCP
  ? process.env.CLIENT_TCP
  : process.env.NODE_ENV === "development"
  ? "8080"
  : "4000";

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
      uri: `http://127.0.0.1:${serverPort}/api`,
      credentials: "include",
    }),
  ]),
  cache: new InMemoryCache(),
});

const App: React.SFC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider {...rootStore}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
