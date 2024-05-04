import express, { Express } from "express";

import { serverConfig } from "./config/serverConfig";


const app: Express = express();

app.listen(serverConfig.PORT, () => {
  // const st : number = 1;
  console.log(`App is started on port : ${serverConfig.PORT}`);
  console.log("In the server");
});
