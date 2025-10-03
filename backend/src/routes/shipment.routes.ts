import { Router } from "express";
import * as shipmentController from "../controllers/shipment.controller";
import { validateRequest, validateParams } from "../middleware/validation";
import {
  createShipmentSchema,
  updateShipmentSchema,
  shipmentIdSchema,
} from "../validations/shipment.validation";

const router = Router();

router.get("/", shipmentController.getAllShipments);
router.get("/:id", validateParams(shipmentIdSchema), shipmentController.getShipmentById);
router.post("/", validateRequest(createShipmentSchema), shipmentController.createShipment);
router.put("/:id", validateParams(shipmentIdSchema), validateRequest(updateShipmentSchema), shipmentController.updateShipment);
router.delete("/:id", validateParams(shipmentIdSchema), shipmentController.deleteShipment);

export default router;
