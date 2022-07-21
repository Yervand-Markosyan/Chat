// libs
const mongoose = require("mongoose");
const fs = require("fs")
const multer = require('multer')
const path = require('path')
//secrets
const SECRET = require("..//HttpServer/secrets/config")
const { Origin_URL, PORT , Origin_URL2} = require("./secrets/config")
//models
const GridFile = require("..//HttpServer/models/filesSchame")
const conversationSchame = require("..//HttpServer/models/ConversationSchame")
const MessageSchame = require("..//HttpServer/models/MessageSchame");
const upload = multer({ dest: path.join(__dirname, '.') })
const io = require("socket.io")({
  cors: {
    origin: [Origin_URL,Origin_URL2]
  },
});
const starting = () => {
  io.listen(PORT)
  console.log("Soket.IO server is started...");
}

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
    console.log("user++")
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  // console.log(users.find((user) => user.userId.userId === userId))
  return users.find((user) => user.userId.userId  === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.",5464);

  //take userId and socketId from user
  socket.on("addUser", (userId, conversationId) => {
    addUser(userId, socket.id, conversationId);
    io.emit("getUsers", users);
    // console.log(users)
  });

  //send and get message
  socket.on("sendMessage", async ({conversationId, senderId, receiverId, mess }) => {
       const  message = {
        // conversationId,
        senderId,
        message:mess,
        // date: {
        //   hours: new Date().getHours(),
        //   minutes: new Date().getMinutes(),
        //   secnds: new Date().getSeconds(),
        //   weekday: new Date().getDay(),
        //   day: new Date().getDate(),
        //   month: new Date().getMonth() + 1,
        //   year: new Date().getYear() - 100,
        // }
       }
      //  console.log(message)
      //  const savedmess =  new MessageSchame(message)
      //  console.log(savedmess)
      //  const saved = await savedmess.save()
    const user = getUser(receiverId);
    const user2 = getUser(senderId);
    // console.log(receiverId,senderId)
    console.log(user.socketId)
    io.to(user.socketId).emit("getMessage",message);
    // io.to(user2.socketId).emit("getMessage", message);    ///esi khanes

  });

  //send and get file
  socket.on("sendFile", upload.any(), async ({ files, conversationId, senderId, receiverId }) => {
    let seved;
    try {
      // uploaded file are accessible as req.files
      if (files) {
        const promises = files.map(async (file) => {
          const fileStream = fs.createReadStream(file.path)
          // upload file to gridfs
          const gridFile = new GridFile({ filename: file.originalname })
          await gridFile.upload(fileStream)
          // delete the file from local folder
          fs.unlinkSync(file.path)
          const data = await GridFile.find({ gridFile })
          const info = data[data.length - 1]
          console.log(SECRET.serverUrl + info._id + "/" + info.filename);
          const mess = {
            conversationId,
            senderId,
            message: `${SECRET.serverUrl + info._id + "/" + info.filename}`,
            date: {
              minutes: new Date().getMinutes(),
              hours: new Date().getHours(),
              secnds: new Date().getSeconds(),
              weekday: new Date().getDay(),
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              year: new Date().getYear() - 100,
            }
          }
          seved = await new MessageSchame(mess)
          const user = getUser(receiverId);
          io.to(user.socketId).emit("getMessage", seved);
        })
        await Promise.all(promises)
      }
      res.sendStatus(201)
    } catch (err) {
      nxt(err)
      io.to(user.socketId).emit("getMessage", "message not saved");
    }
  });

  //video call
  socket.on('join-room', (conversationId, userId) => {
    console.log(roomId, "roomid", userId, "userid");
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

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
