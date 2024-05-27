import express from "express";

import pingController from "../../controllers/pingController";
import submissionRouter from "./submissionRoutes";

const v1Router = express.Router();

// any routes with /v/submission -> routed to  submission router
v1Router.use("/submissions",submissionRouter);


v1Router.get("/ping", pingController);

export default v1Router;