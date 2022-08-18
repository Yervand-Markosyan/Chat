// libs
const FormData = require('form-data');
const axios = require("axios")
//secrets
const { Origin_URL1, PORT, Origin_URL2, URL_LOCAL_SERVER } = require("./secrets_io/config")

const io = require("socket.io")({
  cors: {
    origin: [Origin_URL1, Origin_URL2]
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
    users.push({ userId, socketId, });
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
  socket.on("sendMessage", async (data) => {
    const messageForMongo = {
      conversationId: data.conversationId,
      senderId: data.senderId,
      message: data.message,
      type: data.type,
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
    axios.post(`${URL_LOCAL_SERVER}/chat/sendmessage`, messageForMongo, {
      Headers: {
        "Content-Type": "aplication/json"
      }
    })
      .then(response => {
        const message = response.data
        const companion = getUser(data.companionId);
        const sender = getUser(data.senderId)
        companion ? io.to(companion.socketId).emit("getMessage", message) : null
        io.to(sender.socketId).emit("getMessage", message)
      })
      .catch(e => {
        const sender = getUser(data.senderId);
        io.to(sender.socketId).emit("ERROR", e)
      })
  });

  /// send message type:"file"

  socket.on("sendFile", ({ data, file }) => {
    try {
      const messageForMongo = {
        conversationId: data.conversationId,
        senderId: data.senderId,
        message: file,
        type: data.type,
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
      axios.post(`${URL_LOCAL_SERVER}/chat/sendmessage`, messageForMongo, {
        Headers: {
          "Content-Type": "aplication/json"
        }
      })
        .then(response => {
          const message = response.data
          const companion = getUser(data.companionId);
          companion ? io.to(companion.socketId).emit("getMessage", message) : null
          const sender = getUser(data.senderId)
          io.to(sender.socketId).emit("getMessage", message)
        })
        .catch(e => {
          const sender = getUser(data.senderId);
          io.to(sender.socketId).emit("ERROR", e)
        })
    } catch (e) {
      console.log(e);
    }
  })


  //video call
  socket.on("call_end", (data) => {
      const user1 = getUser(data.loggedUser_id)
      const user2 = getUser(data.companionId)
        user1?io.to(user1.socketId).emit("callEnded", true):null
        user2?io.to(user2.socketId).emit("callEnded", true):null
  })

  socket.on("callUser", (data) => {
    const user = getUser(data.userToCall)
    user?io.to(user.socketId).emit("callUser", { signal: data.signalData, from: data.from, name: data.name , event : data.event}):null
    const token = data.token
    user?axios.post(`${URL_LOCAL_SERVER}/chat/about_companion`, {companion_id:data.from,conversId:null}, {
      Headers: {
        "Content-Type": "aplication/json",
        "authorization": `Bearer ${token}`
      }
    }).then(response=>{
      user?io.to(user.socketId).emit("about_caller",{data:response.data}):null
    })
    .catch(e=>{
      console.log(data.token);
    })
    :
    null
  })

  socket.on("answerCall", (data) => {
    const user = getUser(data.to)
    console.log(123,user);
    user?io.to(user.socketId).emit("callAccepted", data.signal):null
  })

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });

  /// create new conversation 
  socket.on("newConversation",({user_Id,loggedUser_id,token})=>{
    console.log(user_Id);
    axios.post(`${URL_LOCAL_SERVER}/chat/new_convers/${user_Id}/${loggedUser_id}`,{
      Headers: {
        "Content-Type": "aplication/json",
        "authorization": `Bearer ${token}`
      }
    })
    .then((res)=>{
      const loggedUser = getUser(loggedUser_id)
      const companion = getUser(user_Id)
      io.to(loggedUser.socketId).emit("newCompanion",(res.data))
      companion?io.to(companion.socketId).emit("newCompanion",(res.data)):null
    })
    .catch((e)=>{
      const loggedUser = getUser(loggedUser_id)
      io.to(loggedUser.socketId).emit("ERROR",(e))
    })
  })

});


try {
  starting();
} catch (e) {
  console.log(e);
}

