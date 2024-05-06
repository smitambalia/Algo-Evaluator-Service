import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleProducerQueue from "./producers/sampleProducerQueue";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  // const st : number = 1;
  console.log(`App is started on port : ${serverConfig.PORT}`);
  console.log("In the server");
  SampleWorker('SampleQueue');

  sampleProducerQueue("SampleJob", {
    name: "Smit",
    company: "Akhila Labs",
    position: "Member of Technical staff",
    location: "Remote | Ahmedabad | Jamjodhpur",
  });
});
