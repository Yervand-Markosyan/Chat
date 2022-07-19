import openSocket from 'socket.io-client';


class Socket {
 socket = openSocket('http://localhost:3040');

 addUser = () => {

    this.socket.emit("addUser",{})

     return users =  this.socket.on("grtUsers")
}



}