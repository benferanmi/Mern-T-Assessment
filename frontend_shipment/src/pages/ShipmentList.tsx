import { useEffect, useState } from "react";
import { useShipmentStore } from "@/stores/shipmentStore";
import { ShipmentForm } from "@/components/shipments/ShipmentForm";
import { ShipmentTable } from "@/components/shipments/ShipmentTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package, Plus, RefreshCw, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ShipmentList = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    shipments,
    isLoading,
    error,
    fetchShipments,
    createShipment,
    updateShipment,
    deleteShipment,
  } = useShipmentStore();

  useEffect(() => {
    fetchShipments();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreate = async (data: any) => {
    await createShipment(data);
    setShowForm(false);
  };

  const stats = {
    total: shipments.length,
    pending: shipments.filter((s) => s.status === "pending").length,
    inTransit: shipments.filter((s) => s.status === "in-transit").length,
    delivered: shipments.filter((s) => s.status === "delivered").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Shipment Management System
              </h1>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {/* Actions */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={() => setShowForm(!showForm)}
            size="lg"
            className="gap-2"
          >
            <Plus className="h-5 w-5" />
            {showForm ? "Cancel" : "Create Shipment"}
          </Button>
          <Button
            onClick={fetchShipments}
            variant="outline"
            size="lg"
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw
              className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-6">
            <ShipmentForm
              onSubmit={handleCreate}
              onCancel={() => setShowForm(false)}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Shipments</CardTitle>
            <CardDescription>
              Manage and track all your shipments in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && shipments.length === 0 ? (
              <div className="flex justify-center py-12">
                <RefreshCw className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <ShipmentTable
                shipments={shipments}
                onUpdate={updateShipment}
                onDelete={deleteShipment}
                isLoading={isLoading}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShipmentList;
