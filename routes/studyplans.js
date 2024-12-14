const express = require('express');
const router = express.Router();
const StudyPlan = require('../models/StudyPlan');

// Create a new study plan
router.post('/', async (req, res) => {
    const { userId, startDate, endDate, subjects } = req.body;
    try {
        const newStudyPlan = new StudyPlan({
            userId,
            startDate,
            endDate,
            subjects,
        });
        await newStudyPlan.save();
        res.status(201).json(newStudyPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get study plans for a user
router.get('/:userId', async (req, res) => {
    try {
        const studyPlans = await StudyPlan.find({ userId: req.params.userId });
        res.status(200).json(studyPlans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
