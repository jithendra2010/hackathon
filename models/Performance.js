const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Performance = mongoose.model('Performance', PerformanceSchema);

module.exports = Performance;
