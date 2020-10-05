const mongoose = require('mongoose');
const question = require('./question');
const user = require('./user');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type: String, required: true},
    users: {type: [user]},
    quizQuestions: { type: [question], required: true },
    userAnswer: { type: [String]},
    score: {type: {user:user, points: Number}},
    startTime: {type: Date, required: true, default: new Date()}
    
});

module.exports = mongoose.model('User', userSchema);