const mongoose = require("mongoose");
const SECRET = require("..//HttpServer/secrets/config")
const {Origin_URL} = require("./secrets/config")

const io = require("socket.io")(8900, {
  cors: {
    origin: Origin_URL,
  },
});
const starting = ()=>{
  console.log("Soket.IO server is started...");
}

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  
  //take userId and socketId from user
  socket.on("addUser", (userId,roomId) => {
    addUser(userId, socket.id,roomId);
    io.emit("getUsers", users);
    console.log(users)
  });
  
  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });
  
  //video call
  socket.on('join-room', (roomId, userId) => {
    console.log(roomId,"roomid", userId,"userid");
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
      removeUser(socket.id);
      io.emit("getUsers", users);
    })
  })
  
  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
 
try {
  starting();
  mongoose
    .connect(SECRET.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("DB is conected... "))
    .catch(() => console.log("DB is not conected see your Node"));
 
} catch (e) {
  console.log(e);
}
