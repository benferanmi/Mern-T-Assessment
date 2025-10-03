import { Response } from "express";
import { HTTP_STATUS } from "./constants";

export const sendSuccessResponse = <T>(
  res: Response,
  data: T,
  message: string = "Success",
  statusCode: number = HTTP_STATUS.OK
): Response => {
  const response = {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
    path: res.req.originalUrl,
  };
  return res.status(statusCode).json(response);
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  statusCode: number = HTTP_STATUS.BAD_REQUEST,
  error?: string,
  details?: any
): Response => {
  const response = {
    success: false,
    message,
    error: error || message,
    timestamp: new Date().toISOString(),
    path: res.req.originalUrl,
    ...(details && { details }),
  };
  return res.status(statusCode).json(response);
};

export const sendPaginatedResponse = <T>(
  res: Response,
  data: T[],
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  },
  message: string = "Success"
): Response => {
  const response = {
    success: true,
    message,
    data,
    pagination: {
      ...pagination,
      hasNext: pagination.currentPage < pagination.totalPages,
      hasPrev: pagination.currentPage > 1,
    },
    timestamp: new Date().toISOString(),
    path: res.req.originalUrl,
  };
  return res.status(HTTP_STATUS.OK).json(response);
};
