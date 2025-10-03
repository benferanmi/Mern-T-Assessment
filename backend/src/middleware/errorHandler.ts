import { Request, Response, NextFunction } from "express";
import { sendErrorResponse } from "../utils/helpers";
import { HTTP_STATUS } from "../utils/constants";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(error);
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const validationErrors = Object.values(error.errors).map((err: any) => ({
      field: err.path,
      message: err.message,
    }));

    return sendErrorResponse(
      res,
      "Validation failed",
      HTTP_STATUS.UNPROCESSABLE_ENTITY,
      "VALIDATION_ERROR",
      validationErrors
    );
  }

  if (error.name === "CastError") {
    return sendErrorResponse(
      res,
      "Invalid ID format",
      HTTP_STATUS.BAD_REQUEST,
      "INVALID_ID"
    );
  }

  return sendErrorResponse(
    res,
    "Internal server error",
    HTTP_STATUS.INTERNAL_SERVER_ERROR,
    "INTERNAL_ERROR"
  );
};

export const notFoundHandler = (req: Request, res: Response) => {
  return sendErrorResponse(
    res,
    `Route ${req.originalUrl} not found`,
    HTTP_STATUS.NOT_FOUND,
    "ROUTE_NOT_FOUND"
  );
};
