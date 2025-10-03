import { create } from "zustand";
import { Shipment, CreateShipmentInput, UpdateShipmentInput } from "@/types/shipment";
import { toast } from "sonner";

const API_BASE_URL = "https://mern-t-assessment.onrender.com/api/shipments"; //"http://localhost:5000/api/shipments";

interface ShipmentStore {
  shipments: Shipment[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchShipments: () => Promise<void>;
  createShipment: (input: CreateShipmentInput) => Promise<void>;
  updateShipment: (id: string, input: UpdateShipmentInput) => Promise<void>;
  deleteShipment: (id: string) => Promise<void>;
  getShipmentById: (id: string) => Shipment | undefined;
}

export const useShipmentStore = create<ShipmentStore>((set, get) => ({
  shipments: [],
  isLoading: false,
  error: null,

  fetchShipments: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(API_BASE_URL);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch shipments");
      }
      
      set({ shipments: result.data, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch shipments";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  createShipment: async (input: CreateShipmentInput) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to create shipment");
      }
      
      set((state) => ({
        shipments: [result.data, ...state.shipments],
        isLoading: false,
      }));
      
      toast.success("Shipment created successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create shipment";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },

  updateShipment: async (id: string, input: UpdateShipmentInput) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to update shipment");
      }
      
      set((state) => ({
        shipments: state.shipments.map((s) =>
          s._id === id ? result.data : s
        ),
        isLoading: false,
      }));
      
      toast.success("Shipment updated successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update shipment";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },

  deleteShipment: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to delete shipment");
      }
      
      set((state) => ({
        shipments: state.shipments.filter((s) => s._id !== id),
        isLoading: false,
      }));
      
      toast.success("Shipment deleted successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to delete shipment";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },

  getShipmentById: (id: string) => {
    return get().shipments.find((s) => s._id === id);
  },
}));
