const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

// Create a new exam
router.post('/', async (req, res) => {
    const { subject, examDate } = req.body;
    try {
        const newExam = new Exam({ subject, examDate });
        await newExam.save();
        res.status(201).json(newExam);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get exams for a specific subject
router.get('/', async (req, res) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
