import { useState } from "react";
import { Shipment, UpdateShipmentInput, ShipmentStatus } from "@/types/shipment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EditShipmentDialogProps {
  shipment: Shipment;
  onUpdate: (id: string, data: UpdateShipmentInput) => Promise<void>;
  onClose: () => void;
  isLoading?: boolean;
}

export function EditShipmentDialog({
  shipment,
  onUpdate,
  onClose,
  isLoading,
}: EditShipmentDialogProps) {
  const [formData, setFormData] = useState<UpdateShipmentInput>({
    origin: shipment.origin,
    destination: shipment.destination,
    status: shipment.status,
    weight: shipment.weight,
    dimensions: shipment.dimensions,
  });

  const [showDimensions, setShowDimensions] = useState(!!shipment.dimensions);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(shipment._id, formData);
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Shipment - {shipment.trackingNumber}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-origin">Origin</Label>
              <Input
                id="edit-origin"
                value={formData.origin}
                onChange={(e) =>
                  setFormData({ ...formData, origin: e.target.value })
                }
                placeholder="Lagos"
                minLength={3}
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-destination">Destination</Label>
              <Input
                id="edit-destination"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                placeholder="Ibadan"
                minLength={3}
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: ShipmentStatus) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-transit">In Transit</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-weight">Weight (kg) - Optional</Label>
              <Input
                id="edit-weight"
                type="number"
                step="0.1"
                min="0"
                value={formData.weight || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    weight: e.target.value ? parseFloat(e.target.value) : undefined,
                  })
                }
                placeholder="10.5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowDimensions(!showDimensions)}
              className="w-full"
            >
              {showDimensions ? "Hide" : "Add"} Dimensions
            </Button>
          </div>

          {showDimensions && (
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="edit-length">Length (cm)</Label>
                <Input
                  id="edit-length"
                  type="number"
                  step="0.1"
                  min="0"
                  value={formData.dimensions?.length || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dimensions: {
                        ...formData.dimensions!,
                        length: parseFloat(e.target.value),
                        width: formData.dimensions?.width || 0,
                        height: formData.dimensions?.height || 0,
                      },
                    })
                  }
                  required={showDimensions}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-width">Width (cm)</Label>
                <Input
                  id="edit-width"
                  type="number"
                  step="0.1"
                  min="0"
                  value={formData.dimensions?.width || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dimensions: {
                        ...formData.dimensions!,
                        width: parseFloat(e.target.value),
                        length: formData.dimensions?.length || 0,
                        height: formData.dimensions?.height || 0,
                      },
                    })
                  }
                  required={showDimensions}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-height">Height (cm)</Label>
                <Input
                  id="edit-height"
                  type="number"
                  step="0.1"
                  min="0"
                  value={formData.dimensions?.height || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dimensions: {
                        ...formData.dimensions!,
                        height: parseFloat(e.target.value),
                        length: formData.dimensions?.length || 0,
                        width: formData.dimensions?.width || 0,
                      },
                    })
                  }
                  required={showDimensions}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Shipment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
