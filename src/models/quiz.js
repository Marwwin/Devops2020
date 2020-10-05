const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    question: { type: String, required: true },
    correctAnswers: { type: [String], required: true }
    
});

module.exports = mongoose.model('User', userSchema);