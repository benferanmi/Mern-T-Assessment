import Joi from "joi";

export const createShipmentSchema = Joi.object({
  origin: Joi.string().required().min(3).max(100),
  destination: Joi.string().required().min(3).max(100),
  status: Joi.string().valid("pending", "in-transit", "delivered", "cancelled").default("pending"),
  trackingNumber: Joi.string().required().min(5).max(50),
  weight: Joi.number().positive().optional(),
  dimensions: Joi.object({
    length: Joi.number().positive().required(),
    width: Joi.number().positive().required(),
    height: Joi.number().positive().required(),
  }).optional(),
});

export const updateShipmentSchema = Joi.object({
  origin: Joi.string().min(3).max(100).optional(),
  destination: Joi.string().min(3).max(100).optional(),
  status: Joi.string().valid("pending", "in-transit", "delivered", "cancelled").optional(),
  weight: Joi.number().positive().optional(),
  dimensions: Joi.object({
    length: Joi.number().positive().required(),
    width: Joi.number().positive().required(),
    height: Joi.number().positive().required(),
  }).optional(),
});

export const shipmentIdSchema = Joi.object({
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.pattern.base": "Invalid shipment ID format",
  }),
});
