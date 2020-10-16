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
// Port for server
const port = process.env.port || 3000;

// Socket on different port than server
const io = require("socket.io")(3001);

let clientList = [];

// When socket is connected
io.on("connect", (socket) => {
  // Business logic for sockets

  // When new player joins put him in the waiting-room and add to clientList
  socket.on("newplayer", (name) => {
    socket.join("waiting-room");
    const player = { name: name, socket: socket.id };
    clientList.push(player);
    
    updateClientList();
  });

  // When a user leaves the site
  socket.on("disconnect", (n) => {
      // Filter the disconnected user from the clientList
      clientList = clientList.filter(x => x.socket.toString() != socket.id.toString() )
      updateClientList();
  });

  // If an admin sends a request
  socket.on("admin", (request)=>{
    if(request.type == "getWaitingRoom"){
        socket.emit('admin',clientList)
    }
    else if(request.type == "sendMsg"){
        io.to(request.reciever).emit("private",request.message);
    }
  })
    
});
// This updates how many players are online to the players and also list of all players to admins
function updateClientList(){
  io.to('waiting-room').emit("messageChannel", "Get Ready!! There are "+ clientList.length + " players online");
  
  // io.sockets broadcasts to all clients but only admins are on the admin channel
  io.sockets.emit('admin',clientList); 
}


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
const { update } = require("./models/quiz");

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
  console.log("CORS-enabled web server listening on port " + port +"\nSockets on 3001");
});

module.exports = app;
