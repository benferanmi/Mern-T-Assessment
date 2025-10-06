import { useState } from "react";
import { Shipment, UpdateShipmentInput } from "@/types/shipment";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2, Package } from "lucide-react";
import { EditShipmentDialog } from "./EditShipmentDialog";

interface ShipmentTableProps {
  shipments: Shipment[];
  onUpdate: (id: string, data: UpdateShipmentInput) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  isLoading?: boolean;
}

const statusColors = {
  pending: "bg-warning/60 text-warning-foreground border-warning/20",
  "in-transit": "bg-blue-600 text-primary-foreground border-primary/20",
  delivered: "bg-success/80 text-success-foreground border-success/20",
  cancelled:
    "bg-destructive/60 text-destructive-foreground border-destructive/20",
};

export function ShipmentTable({
  shipments,
  onUpdate,
  onDelete,
  isLoading,
}: ShipmentTableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editShipment, setEditShipment] = useState<Shipment | null>(null);

  const handleDelete = async () => {
    if (deleteId) {
      await onDelete(deleteId);
      setDeleteId(null);
    }
  };

  if (shipments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No shipments found</h3>
        <p className="text-muted-foreground">
          Create your first shipment to get started
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Tracking Number</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment._id}>
                <TableCell className="font-mono font-medium">
                  {shipment.trackingNumber}
                </TableCell>
                <TableCell>{shipment.origin}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusColors[shipment.status]}
                  >
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {shipment.weight ? `${shipment.weight} kg` : "-"}
                </TableCell>
                <TableCell>
                  {shipment.dimensions
                    ? `${shipment.dimensions.length}×${shipment.dimensions.width}×${shipment.dimensions.height} cm`
                    : "-"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditShipment(shipment)}
                      disabled={isLoading}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeleteId(shipment._id)}
                      disabled={isLoading}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Shipment</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this shipment? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {editShipment && (
        <EditShipmentDialog
          shipment={editShipment}
          onUpdate={onUpdate}
          onClose={() => setEditShipment(null)}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
