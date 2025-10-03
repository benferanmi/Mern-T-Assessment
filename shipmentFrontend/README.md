# Shipment Management System - Frontend

## Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Vite** - Build tool
- **React Router** - Routing

## Getting Started
### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## State Management
Using Zustand for simple and efficient state management:

```typescript
import { useShipmentStore } from "@/stores/shipmentStore";

const { shipments, fetchShipments, createShipment } = useShipmentStore();
```

## Components

### ShipmentForm
Create new shipments with validation:
- Origin and destination (required)
- Auto-generated tracking number
- Status selection
- Optional weight and dimensions

### ShipmentTable
Display all shipments with:
- Sortable columns
- Status badges
- Edit and delete actions
- Empty state

### EditShipmentDialog
Modal for updating shipments:
- Pre-filled form with current data
- Status updates
- Weight and dimension modifications

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Environment Variables

No environment variables needed for development. The API URL is configured in:
- `src/stores/shipmentStore.ts`

To change the API URL, update:
```typescript
const API_BASE_URL = "http://localhost:5000/api/shipments";
```
