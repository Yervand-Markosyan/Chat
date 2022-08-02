// libs
const FormData = require('form-data');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
//secrets
const { Origin_URL1, PORT, Origin_URL2} = require("./secrets_io/config")
/// servis
const Fetch = require("./FetchServis/fetch")

const io = require("socket.io")({
  cors: {
    origin: [Origin_URL1,Origin_URL2]
  },
  maxHttpBufferSize: 1e8 // 100 MB
});
const starting = () => {
  io.listen(PORT)
  console.log("Soket.IO server is started...");
}

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId , socketId, });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);

};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  // console.log("a user connected.",5464);

  socket.emit("me", socket.id)

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId.userId, socket.id);
    io.emit("getUsers", users);
    console.log(users) 
  });

  //send and get message
  socket.on("sendMessage", async ({ senderId, message, companionId ,conversationId}) => {
    const messageForMongo = {
      conversationId,
      senderId,
      message: message,
      date: {
        hours: new Date().getHours() + "",
        minutes: new Date().getMinutes() + "",
        secnds: new Date().getSeconds() + "",
        weekday: new Date().getDay() + "",
        day: new Date().getDate() + "",
        month: (new Date().getMonth() + 1) + "",
        year: (new Date().getYear() - 100) + "",
      }
    }
    Fetch.post("chat/sendmessage", messageForMongo)
      .then(data => {
        const companion = getUser(companionId);
        io.to(companion.socketId).emit("getMessage", data)
        const sender = getuser(senderId)
        io.to(sender.socketId).emit("getMessage", data)
      })
      .catch(e => {
        const sender = getUser(senderId);
        io.to(sender.socketId).emit("getMessage", e)
      })
  });

  //video call
  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded")
  })

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
  })

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal)
  })

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });
});

try {
  starting();
} catch (e) {
  console.log(e);
}
