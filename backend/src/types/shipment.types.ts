export type ShipmentStatus = "pending" | "in-transit" | "delivered" | "cancelled";

export interface ShipmentDimensions {
  length: number;
  width: number;
  height: number;
}

export interface CreateShipmentDTO {
  origin: string;
  destination: string;
  status?: ShipmentStatus;
  trackingNumber: string;
  weight?: number;
  dimensions?: ShipmentDimensions;
}

export interface UpdateShipmentDTO {
  origin?: string;
  destination?: string;
  status?: ShipmentStatus;
  weight?: number;
  dimensions?: ShipmentDimensions;
}

export interface ShipmentResponse {
  _id: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  trackingNumber: string;
  weight?: number;
  dimensions?: ShipmentDimensions;
  createdAt: Date;
  updatedAt: Date;
}
