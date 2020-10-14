
const express = require('express')
const app = express();
//var http = require('http').createServer(app);
const server  = require('http').createServer(app);
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const io = require('socket.io')(server)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://quizapp:bwV5SSE1A01xGMwD@tlkquizapp.tn7ma.mongodb.net/TLKQuizApp?retryWrites=true&w=majority');

const port = process.env.port || 3000;

const io = require('socket.io')(3001);
//const socket = io()

//socket.on("connect",data => console.log(data));

io.on("connect", socket => {
    console.log("New player connected");
    socket.on('player',name => console.log("Player "+name+ " ready"));
    socket.on('disconnect', (name)=> console.log("Player "+name+" disconnected"))
    socket.emit('messageChannel', "This is server");
  });
//
//io.on('player', socket => {
//    console.log("ready");
//    socket.on('player', (name) => console.log(name));
//})

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
    express.urlencoded({
      extended: true,
    }));

const questionRoutes = require('./routes/questions');
const quizsRoutes = require('./routes/quizs');
const usersRoutes = require('./routes/users');

app.use('/questions',questionRoutes);
app.use('/quizs',quizsRoutes);
app.use('/users',usersRoutes);

app.use((req, res, next) => {
    const error = new Error("Requested resource not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    next;
    res.status(error.status || 500).json({
        status: error.status,
        error: error.message
    });
});
app.use(cors());

//http.createServer(app).listen(port,function () {
//    console.log('CORS-enabled web server listening on port '+port)

//server.listen(3001, function () {
//    console.log('CORS-enabled web server listening on port '+port)
//})
app.listen(port);
module.exports = app;
