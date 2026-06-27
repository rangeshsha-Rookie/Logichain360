# 🚚 LogiChain360

<div align="center">

**End-to-end Smart Logistics Management Platform**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Polygon](https://img.shields.io/badge/Polygon-8247E5?style=for-the-badge&logo=polygon&logoColor=white)](https://polygon.technology/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![Hardhat](https://img.shields.io/badge/Hardhat-fff100?style=for-the-badge&logo=hardhat&logoColor=black)](https://hardhat.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)

*Built for HackNova 2026 — Monorepo · Full-Stack · Blockchain-Integrated*

</div>

---

## 📖 Overview

**LogiChain360** is a full-stack, blockchain-integrated logistics management platform that enables real-time shipment tracking, AI-powered route optimization, and tamper-proof delivery verification on the Polygon blockchain. Built as a monorepo serving four distinct user roles — Driver, Manager, Admin, and Client — the platform unifies every touchpoint of the supply chain into a single, transparent ecosystem.

The platform eliminates trust issues in logistics by anchoring key delivery milestones to immutable smart contracts, giving clients verifiable proof-of-delivery and giving operators live operational visibility.

---

## ✨ Key Features

- 🗺️ **Real-Time Shipment Tracking** — Live GPS updates via Socket.io with driver position synced across all dashboards
- ⛓️ **Blockchain Delivery Verification** — Smart contracts on Polygon Mumbai record delivery milestones tamper-proof using Solidity + Hardhat
- 🤖 **AI Engine** — Route optimization and demand prediction powered by an embedded AI engine
- 🧑‍💼 **Multi-Role Dashboard System** — Separate, role-specific UIs for Drivers, Managers, Admins, and Clients
- 💳 **Stripe Payment Integration** — Secure payment processing for logistics services
- 🔐 **JWT Authentication** — Secure auth with bcrypt password hashing and role-based access control
- ⚡ **Redis Caching** — High-performance caching layer for frequently accessed logistics data
- 🔄 **n8n Workflow Automation** — Automated logistics workflows using n8n for notifications, escalations, and pipeline triggers
- 📁 **File Upload Support** — Multer-based document/image uploads (proof-of-delivery, manifests)
- 📡 **WebSocket Real-Time Events** — Instant status updates for all connected clients via Socket.io

---

## 🏗️ Architecture

LogiChain360 follows a **monorepo architecture** with clearly separated concerns:

```
logichain360/
├── 📁 server/             # Express.js REST API backend
│   ├── src/               # Core server application
│   ├── routes/            # API route definitions
│   ├── models/            # Mongoose data models
│   ├── middleware/        # Auth, validation, error handling
│   └── services/          # Business logic & external integrations
│
├── 📁 client/             # Frontend client applications
│   └── src/               # Multi-role UI (Driver / Manager / Admin)
│
├── 📁 blockchain/         # Solidity smart contracts
│   ├── contracts/         # Smart contract source files (.sol)
│   ├── scripts/           # Deployment scripts
│   ├── test/              # Contract test suite
│   └── hardhat.config.js  # Hardhat network configuration
│
├── 📁 ai-engine/          # AI/ML route optimization module
├── 📁 n8n/                # n8n workflow automation configs
├── 📁 docs/               # Integration contracts & API documentation
├── SETUP.md               # Full setup instructions
└── CONTRIBUTING.md        # Contribution guidelines
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Node.js, Express.js v5, CommonJS |
| **Database** | MongoDB (Mongoose ODM) |
| **Cache** | Redis |
| **Real-Time** | Socket.io v4 |
| **Blockchain** | Solidity, Hardhat, Polygon Mumbai Testnet |
| **Smart Contract Libs** | OpenZeppelin Contracts v4, ethers.js v6 |
| **Payments** | Stripe |
| **Auth** | JWT (jsonwebtoken), bcrypt |
| **Automation** | n8n |
| **File Uploads** | Multer |
| **HTTP Client** | Axios |
| **Dev Tools** | Nodemon, solhint |

---

## 👥 Team & Ownership

| Role | Owner |
|---|---|
| Backend / AI / Blockchain | **Rangesh** |
| Driver UI | **Ryan** |
| Manager UI | **Ansh** |
| Admin UI | **Rajiv** |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- Redis (local or Redis Cloud)
- MetaMask wallet (for blockchain features)
- Stripe account (for payment features)

### 1. Clone the Repository

```bash
git clone https://github.com/rangeshsha-Rookie/Logichain360.git
cd Logichain360
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Setup & Run the Server

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
STRIPE_SECRET_KEY=your_stripe_secret_key
BLOCKCHAIN_RPC_URL=your_polygon_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

```bash
npm run dev     # Development with nodemon
npm start       # Production
```

### 4. Setup & Deploy Smart Contracts

```bash
cd blockchain
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network mumbai
```

### 5. Start the Client

```bash
cd client
npm install
npm start
```

### 6. n8n Automation (Optional)

Import the workflow configs from `/n8n` into your n8n instance to enable automated logistics pipeline triggers and notifications.

> See **[SETUP.md](./SETUP.md)** for the full detailed setup guide.

---

## 🔗 API Overview

The Express server exposes REST endpoints for:

| Module | Base Path | Description |
|---|---|---|
| Auth | `/api/auth` | Login, Register, JWT refresh |
| Shipments | `/api/shipments` | CRUD for logistics orders |
| Drivers | `/api/drivers` | Driver management & location updates |
| Blockchain | `/api/blockchain` | On-chain delivery record verification |
| Payments | `/api/payments` | Stripe payment processing |
| Admin | `/api/admin` | Platform administration |

Real-time events are emitted via Socket.io for:
- `shipment:update` — Live shipment status changes
- `driver:location` — Driver GPS position updates
- `delivery:confirmed` — Blockchain-anchored delivery confirmation

---

## ⛓️ Smart Contracts

Contracts are deployed on **Polygon Mumbai Testnet** and use **OpenZeppelin** for security patterns.

Key contract functions:
- `recordDeliveryMilestone()` — Write immutable checkpoint to chain
- `verifyDelivery()` — Client-callable verification of delivery proof
- `getShipmentHistory()` — Full on-chain audit trail for a shipment

---

## 📄 License

This project is licensed under the **ISC License** — see the [LICENSE](./package.json) field for details.

---

## 🏆 Built At

**HackNova 2026** — Smart Logistics Track

---

<div align="center">
Made with ❤️ by the LogiChain360 Team
</div>
