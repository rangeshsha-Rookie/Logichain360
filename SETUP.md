# ⚙️ LogiChain360 — Full Environment Setup Guide

This guide covers complete setup for all platform components: Node.js backend, React frontend, Polygon blockchain integration, Redis, n8n automation workflows, and Stripe.

---

## 📋 Prerequisites

Install the following before starting:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | v18.0.0+ | [nodejs.org](https://nodejs.org/) |
| **npm** | v9+ | Included with Node.js |
| **MongoDB Atlas account** | Free tier | [mongodb.com/atlas](https://www.mongodb.com/atlas/) |
| **Redis** | v7+ | [redis.io/download](https://redis.io/download) or [Upstash](https://upstash.com/) (cloud) |
| **MetaMask browser extension** | Latest | [metamask.io](https://metamask.io/) |
| **n8n** | Latest | [n8n.io](https://n8n.io/) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

---

## 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/rangeshsha-Rookie/Logichain360.git
cd Logichain360

# Install root dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..
```

---

## 2. MongoDB Atlas Setup

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas/) and create a free account
2. Create a new **free-tier cluster** (M0 Sandbox)
3. Under **Database Access** → Add a new database user with read/write privileges
4. Under **Network Access** → Add IP address `0.0.0.0/0` for development (restrict in production)
5. Click **Connect** → **Connect your application** → copy the connection string
6. Replace `<password>` in the connection string with your database user password

```
# Example connection string
mongodb+srv://rangesh:<password>@cluster0.abcde.mongodb.net/logichain360?retryWrites=true&w=majority
```

---

## 3. Polygon Blockchain Setup (Amoy Testnet)

### 3.1 Configure MetaMask for Polygon Amoy Testnet

1. Open MetaMask → Settings → Networks → Add Network
2. Fill in:
   - **Network Name:** Polygon Amoy Testnet
   - **New RPC URL:** `https://rpc-amoy.polygon.technology/`
   - **Chain ID:** `80002`
   - **Currency Symbol:** `POL`
   - **Block Explorer:** `https://www.oklink.com/amoy`
3. Save and switch to Amoy Testnet

### 3.2 Get Test POL Tokens

1. Copy your MetaMask wallet address
2. Go to the [Polygon Amoy Faucet](https://faucet.polygon.technology/)
3. Paste your address and request test tokens (needed for gas fees)

### 3.3 Export Your Private Key

1. MetaMask → Account Details → Export Private Key
2. ⚠️ **NEVER commit your private key to Git.** Store it only in your `.env` file.
3. Add `.env` to `.gitignore` (already included in this repo)

### 3.4 Note Your Contract Address

If a smart contract is already deployed, its address is in `blockchain/contracts/` or provided by your team. If deploying fresh:

```bash
# Navigate to blockchain directory
cd blockchain
npm install
npx hardhat run scripts/deploy.js --network amoy
# Copy the deployed contract address from the output
```

---

## 4. Redis Setup

### Option A — Local Redis (development)

```bash
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt-get install redis-server
sudo systemctl start redis

# Verify
redis-cli ping
# Expected output: PONG
```

Local Redis URL: `redis://localhost:6379`

### Option B — Upstash (cloud, free tier)

1. Go to [upstash.com](https://upstash.com/) → Create free Redis database
2. Copy the **REST URL** and **token** from the dashboard
3. Use the `REDIS_URL` format provided by Upstash

---

## 5. n8n Workflow Setup

### 5.1 Run n8n locally

```bash
# Install n8n globally
npm install -g n8n

# Start n8n
n8n start

# n8n runs at http://localhost:5678
```

### 5.2 Import LogiChain360 Workflows

1. Open n8n at `http://localhost:5678`
2. Go to **Workflows** → **Import from File**
3. Import each workflow JSON from the `n8n/workflows/` directory:
   - `shipment-alert.json` — Stakeholder notifications on milestone updates
   - `anomaly-escalation.json` — Alert workflows for AI-flagged shipments
   - `delivery-confirmation.json` — Stripe payment trigger on final delivery
   - `status-sync.json` — MongoDB ↔ blockchain sync verification
4. Set your webhook base URL in each workflow to match your server
5. Activate all workflows by toggling the **Active** switch

### 5.3 Webhook Configuration

The server sends events to n8n via webhook. Ensure `N8N_WEBHOOK_BASE` in your `.env` matches your n8n instance URL:

```env
N8N_WEBHOOK_BASE=http://localhost:5678/webhook
```

---

## 6. Stripe Setup (Payment Integration)

1. Go to [stripe.com](https://stripe.com/) → Create free account
2. Dashboard → Developers → API Keys
3. Copy your **Secret Key** (starts with `sk_test_` for test mode)
4. Add to `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_key_here
   ```

> For development and testing, always use test mode keys (`sk_test_` / `pk_test_`).

---

## 7. Environment Variables — Full Reference

Create a `.env` file in the `/server` directory:

```env
# ─── Server ───────────────────────────────────────
PORT=5000
NODE_ENV=development

# ─── MongoDB ──────────────────────────────────────
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/logichain360?retryWrites=true&w=majority

# ─── JWT Authentication ───────────────────────────
JWT_SECRET=your_strong_random_secret_minimum_32_characters
JWT_EXPIRES_IN=7d

# ─── Polygon Blockchain ───────────────────────────
POLYGON_RPC_URL=https://rpc-amoy.polygon.technology/
PRIVATE_KEY=your_metamask_wallet_private_key_no_0x_prefix
CONTRACT_ADDRESS=0xYourDeployedContractAddress

# ─── Redis ────────────────────────────────────────
REDIS_URL=redis://localhost:6379
# Or Upstash: rediss://default:token@host.upstash.io:6380

# ─── n8n Automation ───────────────────────────────
N8N_WEBHOOK_BASE=http://localhost:5678/webhook

# ─── Stripe ───────────────────────────────────────
STRIPE_SECRET_KEY=sk_test_your_stripe_test_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_signing_secret

# ─── CORS ─────────────────────────────────────────
CLIENT_URL=http://localhost:3000
```

> ⚠️ **Security:** Never commit `.env` to version control. The `.gitignore` already excludes it.

---

## 8. Run the Full Stack

```bash
# Terminal 1 — Backend server
cd server
npm run dev
# Server starts at http://localhost:5000

# Terminal 2 — Frontend client
cd client
npm start
# Dashboard opens at http://localhost:3000

# Terminal 3 — Redis (if running locally)
redis-server

# Terminal 4 — n8n
n8n start
# n8n dashboard at http://localhost:5678
```

---

## 9. Verify the Setup

Once all services are running, run these quick checks:

```bash
# 1. Check backend health
curl http://localhost:5000/api/health
# Expected: { "status": "ok", "mongodb": "connected", "redis": "connected" }

# 2. Check Redis connection
redis-cli ping
# Expected: PONG

# 3. Check n8n workflows
# Open http://localhost:5678 → all workflows should show Active

# 4. Check blockchain connection
# Backend logs should show: "Blockchain service initialized — Polygon Amoy Testnet"
```

---

## 10. Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| `MongoServerError: Authentication failed` | Wrong MongoDB credentials | Re-check URI username/password in Atlas |
| `Error: Cannot find module 'dotenv'` | Dependencies not installed | Run `npm install` in `/server` |
| `Redis connection refused` | Redis not running | Start Redis with `redis-server` or use Upstash |
| `Error: invalid private key` | Private key format wrong | Remove `0x` prefix from private key in `.env` |
| `n8n webhook not receiving events` | Webhook URL mismatch | Check `N8N_WEBHOOK_BASE` matches n8n instance URL |
| `CORS error in browser` | `CLIENT_URL` mismatch | Set `CLIENT_URL=http://localhost:3000` in `.env` |

---

## 11. Production Deployment Notes

For production deployment:

1. **MongoDB** — Use dedicated M10+ cluster with VPC peering
2. **Redis** — Use Upstash or AWS ElastiCache with TLS enabled
3. **Blockchain** — Switch `POLYGON_RPC_URL` to Polygon Mainnet RPC
4. **n8n** — Deploy n8n on a dedicated server or use n8n Cloud
5. **Environment** — Set `NODE_ENV=production`, use secrets manager (AWS Secrets Manager / Doppler)
6. **HTTPS** — Terminate SSL at load balancer or use Nginx reverse proxy
7. **Process manager** — Use `pm2` for Node.js process management

```bash
# Production start with pm2
npm install -g pm2
pm2 start server/src/index.js --name logichain360
pm2 save
pm2 startup
```

---

<div align="center">

*For questions or issues, open a [GitHub Issue](https://github.com/rangeshsha-Rookie/Logichain360/issues) or reach out on [LinkedIn](https://linkedin.com/in/rangesh-gupta).*

</div>
