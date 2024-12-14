const express = require('express');
const router = express.Router();
const Notification = require('../models/Notifications');

// Get notifications for a user
router.get('/:userId', async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.userId, isRead: false });
        res.status(200).json(notifications);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Mark notification as read
router.put('/:notificationId', async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.notificationId);
        notification.isRead = true;
        await notification.save();
        res.status(200).json(notification);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
