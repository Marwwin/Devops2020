const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/questions');
const quizRoutes = require('./routes/quizs');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://quizapp:bwV5SSE1A01xGMwD@tlkquizapp.tn7ma.mongodb.net/TLKQuizApp?retryWrites=true&w=majority');


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.use('/users', userRoutes);
/*
app.use(function (req, res, next) {

    if (req.header('authorization') != undefined) {
        const decode = jwt.verify(req.header('authorization'), 'secret');
        var userId = decode.userId;
        req.userId = userId;

    }
    next();
});
*/

app.use('/quizs', quizRoutes);
app.use('/quiestions', questionRoutes);

//Main Error for anything not caught

app.use((req, res, next) => {
    const error = new Error("Requested resource not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        status: error.status,
        error: error.message
    });
});

module.exports = app;