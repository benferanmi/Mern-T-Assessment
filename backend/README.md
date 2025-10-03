# Shipment System - Backend

A RESTful API for managing shipments built with Node.js, Express, TypeScript, and MongoDB.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:

3. Update `.env` with your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shipments
NODE_ENV=development
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

### Base URL
```
http://localhost:5000/api/shipments
```

### Endpoints

#### Get All Shipments
```http
GET /api/shipments
```

#### Get Shipment by ID
```http
GET /api/shipments/:id
```

#### Create Shipment
```http
POST /api/shipments
{
  "origin": "Lagos",
  "destination": "Ibadan",
  "status": "pending",
  "trackingNumber": "TRK123456",
  "weight": 10.5,
  "dimensions": {
    "length": 20,
    "width": 15,
    "height": 10
  }
}
```

#### Update Shipment
```http
PUT /api/shipments/:id
{
  "status": "in-transit"
}
```

#### Delete Shipment
```http
DELETE /api/shipments/:id
```