import express, { Application } from "express";
import config from "config";
import connect from "./utils/connect";

const port = config.get<number>("port");

const app: Application = express();

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  connect();
});
