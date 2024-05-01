import express, { Express } from "express";

const app: Express = express();

app.listen(3000, () => {
    console.log("App is started on port : 3000 " );
    console.log("In the server");
})