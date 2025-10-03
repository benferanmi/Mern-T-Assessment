import Shipment, { IShipment } from "../models/shipment.model";
import { CreateShipmentDTO, UpdateShipmentDTO } from "../types/shipment.types";

export class ShipmentService {
  async getAllShipments(): Promise<IShipment[]> {
    return await Shipment.find().sort({ createdAt: -1 });
  }

  async getShipmentById(id: string): Promise<IShipment | null> {
    return await Shipment.findById(id);
  }

  async createShipment(shipmentData: CreateShipmentDTO): Promise<IShipment> {
    const shipment = new Shipment(shipmentData);
    return await shipment.save();
  }

  async updateShipment(
    id: string,
    updateData: UpdateShipmentDTO
  ): Promise<IShipment | null> {
    return await Shipment.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );
  }

  async deleteShipment(id: string): Promise<IShipment | null> {
    return await Shipment.findByIdAndDelete(id);
  }

  async checkTrackingNumberExists(trackingNumber: string): Promise<boolean> {
    const shipment = await Shipment.findOne({ trackingNumber });
    return !!shipment;
  }

  async getShipmentsByStatus(status: string): Promise<IShipment[]> {
    return await Shipment.find({ status }).sort({ createdAt: -1 });
  }
}

export default new ShipmentService();
