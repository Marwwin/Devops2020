const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    users: { type: [mongoose.Types.ObjectId], ref: 'User' },
    quizQuestions: { type: [mongoose.Types.ObjectId], ref: 'Question', required: true },
    userAnswer: { type: [String] },
    score: { type: { user: mongoose.Types.ObjectId, points: Number } , ref: 'User'},
    startTime: { type: Date, required: true, default: new Date() }

});

module.exports = mongoose.model('Quiz', quizSchema);