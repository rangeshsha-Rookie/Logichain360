export const mockSummary = {
  pending: 12,
  vehicles: 8,
  delaysPct: 15,
  revenueToday: 12540,
  co2KgToday: 842.3
};

export const mockShipments = [
  {
    id: 1,
    trackingId: 'LC-2040',
    pickup: { city: 'Pune', coords: [18.5204, 73.8567] },
    drop: { city: 'Nashik', coords: [19.9975, 73.7898] },
    status: 'In Transit',
    eta: '2h 15m',
    driver: null,
    weightKg: 1200
  },
  {
    id: 2,
    trackingId: 'LC-2041',
    pickup: { city: 'Mumbai', coords: [19.0760, 72.8777] },
    drop: { city: 'Surat', coords: [21.1702, 72.8311] },
    status: 'Pending',
    eta: '---',
    driver: { name: 'Raj', id: 'D1' }
  },
  {
    id: 3,
    trackingId: 'LC-2042',
    pickup: { city: 'Thane' },
    drop: { city: 'Panvel' },
    status: 'Delivered',
    eta: 'Completed',
    driver: { name: 'Amit', id: 'D2' }
  }
];

export const mockOptimizeResult = {
  distancekm: 212.4,
  etaminutes: 245,
  co2kg: 22.1,
  co2source: 'Climatiq API estimate',
  route: [[18.5204, 73.8567], [19.9975, 73.7898]]
};

export const mockDrivers = [
  { id: 'D1', name: 'Raj', available: true, phone: '+91 9876543210' },
  { id: 'D2', name: 'Amit', available: false, phone: '+91 9876543211' },
  { id: 'D3', name: 'Priya', available: true, phone: '+91 9876543212' }
];

export const mockAudit = [
  { 
    shipmentId: 'LC-2039', 
    txHash: '0xabc123def456789...', 
    status: 'Settled', 
    timestamp: '12:42 PM',
    explorerUrl: 'https://mumbai.polygonscan.com/tx/0xabc123def456789'
  },
  { 
    shipmentId: 'LC-2040', 
    txHash: '0xdef456abc789012...', 
    status: 'Pending', 
    timestamp: '12:55 PM',
    explorerUrl: 'https://mumbai.polygonscan.com/tx/0xdef456abc789012'
  }
];

export const mockWarehouses = [
  { id: 'WH-MH-01', location: 'Pune', capacityPct: 80, available: true },
  { id: 'WH-MH-02', location: 'Mumbai', capacityPct: 95, available: false },
  { id: 'WH-MH-03', location: 'Nashik', capacityPct: 45, available: true }
];

export const mockNotifications = [
  { id: 1, message: 'Delay detected on LC-2040', severity: 'warning', timestamp: '2 mins ago' },
  { id: 2, message: 'Driver Raj assigned to LC-2041', severity: 'info', timestamp: '5 mins ago' }
];
