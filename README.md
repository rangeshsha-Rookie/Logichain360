<div align="center">

# 🚚 LogiChain360
### Blockchain-Integrated Supply Chain Optimization Platform

**Real-time shipment tracking, tamper-proof delivery milestones, and end-to-end supply chain transparency — powered by blockchain and AI-driven logistics automation.**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Polygon](https://img.shields.io/badge/Polygon_Blockchain-8247E5?style=flat&logo=polygon&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![n8n](https://img.shields.io/badge/n8n_Automation-EF5B00?style=flat&logo=n8n&logoColor=white)

</div>

---

## 🎯 Research Context

LogiChain360 addresses a core challenge in modern supply chain management: **the lack of real-time, verifiable, and tamper-proof data across multi-party logistics networks**.

This project is directly aligned with India's **PM Gati Shakti National Master Plan** — which aims to integrate infrastructure planning across 16 ministries to eliminate logistics inefficiencies. Key research problems this project engages with:

- **Supply chain visibility** — How do you create an immutable, auditable trail across fragmented logistics networks?
- **Optimization under uncertainty** — How can AI-driven route and status prediction reduce delivery delays?
- **Blockchain for industrial trust** — How does decentralized ledger technology create verifiable delivery milestones without central authority?

This platform was built as an applied systems prototype exploring these questions at the intersection of **blockchain technology, supply chain optimization, and AI automation**.

---

## 🧩 Problem → Approach → Outcome

| | |
|---|---|
| **Problem** | Supply chains across India's logistics sector suffer from fragmented visibility, unverifiable delivery claims, and manual tracking systems prone to data manipulation and delays. |
| **Approach** | Built a full-stack platform combining blockchain-backed milestone logging (Polygon), real-time shipment dashboards, and n8n-powered automation workflows to orchestrate multi-step logistics processes without manual intervention. |
| **Outcome** | Delivered a prototype platform providing tamper-proof shipment records, real-time tracking dashboards, and automated status notifications — demonstrating how blockchain transparency can reduce logistics fraud and improve accountability. |

---

## 🚀 Key Features

- **⛓️ Blockchain Milestone Logging** — Every delivery status update is written to Polygon blockchain — immutable, auditable, and fraud-resistant
- **📍 Real-Time Shipment Tracking** — Live dashboard showing shipment location, ETA, and status across the supply chain
- **🤖 AI Engine** — Intelligent routing and anomaly detection for flagging shipment delays and irregularities
- **⚙️ n8n Workflow Automation** — Automated alerts, status broadcasts, and inter-system data sync without manual triggers
- **📊 Supply Chain Analytics Dashboard** — Aggregate visibility into delivery performance, bottlenecks, and SLA compliance
- **🔒 Tamper-Proof Evidence** — Cryptographic proof of delivery, custody transfer, and milestone completion

---

## 🏗️ System Architecture

```
Client Dashboard (React)
    │
    ▼
┌──────────────────────┐
│   Node.js API Server      │
│  ├─ Shipment Controller      │
│  ├─ Tracking Engine          │
│  └─ AI Route Optimizer       │
└───────┬─────────────┘
           │
  ┌──────┴──────┐
  ▼              ▼
 MongoDB Atlas   Polygon Blockchain
(shipment data)  (immutable milestones)
  │
  ▼
n8n Automation Engine
(alerts, workflows, integrations)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, JavaScript |
| Backend | Node.js, Express |
| Blockchain | Polygon (Amoy Testnet) |
| Database | MongoDB Atlas |
| Automation | n8n Workflow Engine |
| AI Engine | Custom route optimization & anomaly detection |

---

## 🔍 Research Alignment

This project engages with active research domains in supply chain management and logistics systems:

| Research Domain | How LogiChain360 Addresses It |
|---|---|
| **Supply chain transparency** | Blockchain-based milestone logging creates auditable, tamper-resistant delivery records |
| **Logistics optimization** | AI engine models route efficiency and flags anomalies for intervention |
| **Multi-party trust systems** | Decentralized ledger eliminates reliance on any single party for record-keeping |
| **Automation in industrial systems** | n8n workflows demonstrate low-code orchestration of complex logistics processes |
| **PM Gati Shakti alignment** | Addresses inter-ministry data fragmentation through a unified tracking layer |

---

## ⚙️ Setup

```bash
# 1. Clone the repository
git clone https://github.com/rangeshsha-Rookie/Logichain360.git
cd Logichain360

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Add MongoDB URI, Polygon RPC URL, and n8n webhook endpoints

# 4. Run the development server
npm run dev
```

See `SETUP.md` for full blockchain and n8n configuration instructions.

---

## 🤝 Contributing

See `CONTRIBUTING.md` for guidelines. Issues and PRs welcome.

---

<div align="center">

Built by **Rangesh Gupta** · B.E. Computer Engineering (Data Science), SLRTCE · [GitHub Profile](https://github.com/rangeshsha-Rookie)

*Exploring applied AI and blockchain for real-world supply chain problems.*

</div>
