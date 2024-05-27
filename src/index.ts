import bodyParser from "body-parser";
import express, { Express } from "express";

import billBoardAdapter from "./config/billBoardConfig";
import serverConfig from "./config/serverConfig";
import sampleProducerQueue from "./producers/sampleProducerQueue";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use("/api", apiRouter);
app.use("/ui", billBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`App is started on port : ${serverConfig.PORT}`);
  console.log("In the server");
  SampleWorker("SampleQueue");

  sampleProducerQueue(
    "SampleJob",
    {
      name: "Smit",
      company: "Akhila Labs",
      position: "Member of Technical staff",
      location: "Remote | Ahmedabad | Jamjodhpur",
    },
    2
  );

  sampleProducerQueue(
    "SampleJob",
    {
      name: "Yashree",
      company: "Team India",
      position: "Captain of Cricket Team India",
      location: "Remote",
    },
    1
  );
});
