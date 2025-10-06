export type ShipmentStatus = "pending" | "in-transit" | "delivered" | "cancelled";

export interface ShipmentDimensions {
  length: number;
  width: number;
  height: number;
}

export interface Shipment {
  _id: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  trackingNumber: string;
  weight?: number;
  dimensions?: ShipmentDimensions;
  createdAt: string;
  updatedAt: string;
}

export interface CreateShipmentInput {
  origin: string;
  destination: string;
  status?: ShipmentStatus;
  trackingNumber: string;
  weight?: number;
  dimensions?: ShipmentDimensions;
}

export interface UpdateShipmentInput {
  origin?: string;
  destination?: string;
  status?: ShipmentStatus;
  weight?: number;
  dimensions?: ShipmentDimensions;
}
