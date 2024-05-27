import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodSchema } from "zod";

export const validate =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (schema: ZodSchema<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          ...req.body,
        });
        next();
      } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: "failed",
          error: error,
          message: "Invalid request params",
          data : {}
        });
      }
    };
