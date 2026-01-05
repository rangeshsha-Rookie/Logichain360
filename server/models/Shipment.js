// server/models/Shipment.js
const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    default: () => `LC-${Math.floor(Math.random() * 10000)}`
  },
  pickup: {
    lat: Number,
    lng: Number,
    address: String
  },
  drop: {
    lat: Number,
    lng: Number,
    address: String
  },
  weight: Number,
  driverId: { type: String, default: null },
  status: { type: String, default: 'created' },
  blockchainTx: String,
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Shipment', ShipmentSchema);