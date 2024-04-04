const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port =3000;
const app = express();
const cors =require("cors");
const httpServer = createServer(app);
app.use(cors());

const io= new Server(httpServer, {
    cors: {
        origin: ["http://127.0.0.1:5173"],
        
      }
  });

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message",function(data){
    console.log(data);
    socket.broadcast.emit("recieve",data)
  })
});

app.get("/", (req, res) => {
  res.send("server is running ");
});


httpServer.listen(port);