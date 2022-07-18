// const   WebSocketServer = require('ws');


// function WEBSOCKET (){
// const wss = new WebSocketServer({ port: 5000 },()=>{
//     console.log(`Websocket server started on  port... >  ${5000}`);
// });


// wss.on("connection", function connection(ws) {
//   ws.on("message", function (message) {
//     message = JSON.parse(message);
//     switch (message.event) {
//       case "message":
//         // sendAllClients(message);
//         break;

//       case "connection":
//         console.log('conect');
//         // clientConnection(message)
//         break;
//       case "disConnection":
//         // sendAllClients(message);
//         break;
//     }
//   });
// });

// }
// module.exports = WEBSOCKET