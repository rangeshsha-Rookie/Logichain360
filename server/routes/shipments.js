const express = require('express');
const router = express.Router();
const Shipment = require('../models/Shipment');

// CREATE shipment
router.post('/', async (req, res) => {
  try {
    const { pickup, drop, weight, driverId, status } = req.body;

    if (!pickup || !drop) {
      return res.status(400).json({ message: 'pickup and drop are required' });
    }

    const doc = await Shipment.create({
      pickup,
      drop,
      weight,
      driverId: driverId ?? null,
      status: status ?? 'created',
    });

    return res.status(201).json(doc);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// GET all shipments
router.get('/', async (req, res) => {
  try {
    const docs = await Shipment.find().sort({ createdAt: -1 });
    return res.json(docs);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// GET one shipment by id
router.get('/:id', async (req, res) => {
  try {
    const doc = await Shipment.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Shipment not found' });
    return res.json(doc);
  } catch (err) {
    return res.status(400).json({ message: 'Invalid shipment id' });
  }
});

// UPDATE shipment
router.patch('/:id', async (req, res) => {
  try {
    const doc = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) return res.status(404).json({ message: 'Shipment not found' });
    return res.json(doc);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// DELETE shipment
router.delete('/:id', async (req, res) => {
  try {
    const doc = await Shipment.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Shipment not found' });
    return res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid shipment id' });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 7b6aeaf73626b0f61b4b82befd570c2302dcb253
