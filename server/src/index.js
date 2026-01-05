// server/src/index.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Middlewares
app.use(cors());
app.use(express.json());

// ADD THIS:
const shipmentsRouter = require('../routes/shipments');
app.use('/api/shipments', shipmentsRouter);

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Socket.io GPS streaming
io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('gpsupdate', (data) => {
    console.log('gpsupdate', data);
    io.emit('gpsupdate', data); // broadcast to all
  });
});

// Startup (Mongo optional for now)
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || process.env.MONGOURI;

async function start() {
  try {
    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log('MongoDB connected');
    } else {
      console.warn('No MONGO_URI/MONGOURI set, starting without DB');
    }

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Startup error', err);
    process.exit(1);
  }
}

<<<<<<< HEAD
start();
=======
start();
>>>>>>> 7b6aeaf73626b0f61b4b82befd570c2302dcb253
