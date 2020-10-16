const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb+srv://quizapp:bwV5SSE1A01xGMwD@tlkquizapp.tn7ma.mongodb.net/TLKQuizApp?retryWrites=true&w=majority"
);

const port = process.env.port || 3000;

// Socket on different port than server
const io = require("socket.io")(3001);

let clients;
let clientList = [];

// When socket is connected
io.on("connect", (socket) => {
  // Business logic for sockets

  // When new player joins put him in the waiting-room and add to clientList
  socket.on("newplayer", (name) => {
    socket.join("waiting-room");
    const player = { name: name, socket: socket.id };
    clientList.push(player);
    io.to('waiting-room').emit("messageChannel", "Get Ready!! There are "+ clientList.length + " players online");
    
  });

  // When a user leaves the room
  socket.on("disconnect", (n) => {
      // Filter the disconnected user from the clientList
      clientList = clientList.filter(x => x.socket.toString() != socket.id.toString() )
      io.to('waiting-room').emit("messageChannel", "Get Ready!! There are "+ clientList.length+ " players online");
  });

  socket.on("admin", (request)=>{
    if(request.type == "getWaitingRoom"){
        socket.emit('admin',clientList)
    }
    else if(request.type == "sendMsg"){
        console.log("send");
        io.to(request.reciever).emit("private",request.message);
    }
  })

  if(clientList.length>1){
      
      io.to(clientList[0].socket).emit("private", "Secret message to user "+ clientList[0].name);
  }
    
});



// Normal server stuff routing etc.
app.use(cors());

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const questionRoutes = require("./routes/questions");
const quizsRoutes = require("./routes/quizs");
const usersRoutes = require("./routes/users");

app.use("/questions", questionRoutes);
app.use("/quizs", quizsRoutes);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
  const error = new Error("Requested resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  next;
  res.status(error.status || 500).json({
    status: error.status,
    error: error.message,
  });
});
app.use(cors());

app.listen(port, function() {
  console.log("CORS-enabled web server listening on port " + port);
});

module.exports = app;
