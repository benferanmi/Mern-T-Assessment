import { Request, Response, NextFunction } from "express";
import shipmentService from "../services/shipment.service";
import { sendSuccessResponse, sendErrorResponse } from "../utils/helpers";
import { HTTP_STATUS, ERROR_CODES } from "../utils/constants";

export const getAllShipments = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const shipments = await shipmentService.getAllShipments();
    sendSuccessResponse(
      res,
      shipments,
      "Shipments retrieved successfully",
      HTTP_STATUS.OK
    );
  } catch (error) {
    next(error);
  }
};

export const getShipmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const shipment = await shipmentService.getShipmentById(id);

    if (!shipment) {
      sendErrorResponse(
        res,
        "Shipment not found",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.SHIPMENT_NOT_FOUND
      );
      return;
    }

    sendSuccessResponse(
      res,
      shipment,
      "Shipment retrieved successfully",
      HTTP_STATUS.OK
    );
  } catch (error) {
    next(error);
  }
};

export const createShipment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const shipmentData = req.body;

    const trackingExists = await shipmentService.checkTrackingNumberExists(
      shipmentData.trackingNumber
    );

    if (trackingExists) {
      sendErrorResponse(
        res,
        "Tracking number already exists",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.VALIDATION_ERROR
      );
      return;
    }

    const newShipment = await shipmentService.createShipment(shipmentData);
    sendSuccessResponse(
      res,
      newShipment,
      "Shipment created successfully",
      HTTP_STATUS.CREATED
    );
  } catch (error) {
    next(error);
  }
};

export const updateShipment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const shipment = await shipmentService.getShipmentById(id);
    if (!shipment) {
      sendErrorResponse(
        res,
        "Shipment not found",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.SHIPMENT_NOT_FOUND
      );
      return;
    }

    const updatedShipment = await shipmentService.updateShipment(id, updateData);
    sendSuccessResponse(
      res,
      updatedShipment,
      "Shipment updated successfully",
      HTTP_STATUS.OK
    );
  } catch (error) {
    next(error);
  }
};

export const deleteShipment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const shipment = await shipmentService.getShipmentById(id);
    if (!shipment) {
      sendErrorResponse(
        res,
        "Shipment not found",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.SHIPMENT_NOT_FOUND
      );
      return;
    }

    await shipmentService.deleteShipment(id);
    sendSuccessResponse(
      res,
      null,
      "Shipment deleted successfully",
      HTTP_STATUS.OK
    );
  } catch (error) {
    next(error);
  }
};
