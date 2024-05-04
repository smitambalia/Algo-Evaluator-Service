import express, { Express } from "express";

import { serverConfig } from "./config/serverConfig";
import apiRouter from "./routes";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  // const st : number = 1;
  console.log(`App is started on port : ${serverConfig.PORT}`);
  console.log("In the server");
});
