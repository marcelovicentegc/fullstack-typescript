import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as path from "path";

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("./dist")));
    app.get(
      "*",
      cors({
        origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
      }),
      (req, res) => {
        res.sendFile(path.resolve("./dist/index.html"));
      }
    );

    app.listen(4000, () => {
      console.log("Server is ready for requests on port 4000");
    });
  }

  if (process.env.NODE_ENV === "development") {
    app.listen(8080, () => {
      console.log("Server is ready for requests on port 8080");
    });
  }
};

startServer();
