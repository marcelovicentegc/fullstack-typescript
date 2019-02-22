import { ApolloServer } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import schema from "./schema/schema";

const startServer = async () => {
  const server = new ApolloServer({
    schema,
    playground: {
      endpoint: "/api/playground"
    },
    context: ({ req, res }: any) => ({ req, res })
  });

  let retries = 5;
  while (retries) {
    try {
      await createConnection().then(connection => {
        console.log("Connected to database");
      });
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`${retries} retries left`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  const app = express();
  app.use(bodyParser.json());
  server.applyMiddleware({
    app,
    path: "/api/playground",
    cors: {
      origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
      credentials: true
    }
  });

  app.listen(8080, () => {
    console.log("Server is ready for requests on port 8080");
  });
};

startServer();
