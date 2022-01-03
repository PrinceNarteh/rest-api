import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { body, params, query } = req;

    try {
      schema.parse({
        body,
        params,
        query,
      });
      next();
    } catch (error: any) {
      return res.status(400).send(error.errors);
    }
  };

export default validateResource;
