const express = require('express');
const router = express.Router();
const Performance = require('../models/performance');

// Track performance
router.post('/', async (req, res) => {
    const { userId, examId, score } = req.body;
    try {
        const performance = new Performance({ userId, examId, score });
        await performance.save();
        res.status(201).json(performance);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
