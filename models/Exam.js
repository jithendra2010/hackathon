const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    examDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;
