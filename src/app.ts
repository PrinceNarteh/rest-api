import express, { Application } from "express";

const app: Application = express();

app.listen(4000, () => {
  console.log(`🚀 Server running on http://localhost:4000`);
});
