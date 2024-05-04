import { Request, Response } from "express";

const pingController = (_: Request, res: Response) => {
  return res.status(200).send({
    message: "Ping is working",
  });
};

export default pingController;
