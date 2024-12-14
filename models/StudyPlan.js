const mongoose = require('mongoose');

const StudyPlanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming a User model exists
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    subjects: {
        type: [String], // A list of subjects
        required: true,
    },
}, {
    timestamps: true,
});

const StudyPlan = mongoose.model('StudyPlan', StudyPlanSchema);

module.exports = StudyPlan;
