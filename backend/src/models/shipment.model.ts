import mongoose, { Schema, Document } from "mongoose";

export interface IShipment extends Document {
  origin: string;
  destination: string;
  status: "pending" | "in-transit" | "delivered" | "cancelled";
  trackingNumber: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ShipmentSchema = new Schema<IShipment>(
  {
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "in-transit", "delivered", "cancelled"],
      default: "pending",
    },
    trackingNumber: { type: String, required: true, unique: true },
    weight: { type: Number },
    dimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IShipment>("Shipment", ShipmentSchema);
