import express, { Application } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const port = config.get<number>("port");

const app: Application = express();

app.listen(port, async () => {
  logger.info(`Server running on http://localhost:${port}`);
  await connect();
});
