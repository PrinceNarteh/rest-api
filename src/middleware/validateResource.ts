import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { body, params, query } = req;

    try {
      schema.parse({
        body,
        params,
        query,
      });
    } catch (error: any) {
      return res.status(400).send(error.errors);
    }
  };

export default validate;
