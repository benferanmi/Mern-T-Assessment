import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { sendErrorResponse } from "../utils/helpers";
import { HTTP_STATUS, ERROR_CODES } from "../utils/constants";

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (error) {
      const validationErrors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
        value: detail.context?.value,
      }));

      return sendErrorResponse(
        res,
        validationErrors[0].message,
        HTTP_STATUS.UNPROCESSABLE_ENTITY,
        ERROR_CODES.VALIDATION_ERROR,
        validationErrors
      );
    }

    req.body = value;
    return next();
  };
};

export const validateParams = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.params, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (error) {
      const validationErrors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return sendErrorResponse(
        res,
        validationErrors[0].message,
        HTTP_STATUS.UNPROCESSABLE_ENTITY,
        ERROR_CODES.VALIDATION_ERROR,
        validationErrors
      );
    }

    req.params = value;
    return next();
  };
};
