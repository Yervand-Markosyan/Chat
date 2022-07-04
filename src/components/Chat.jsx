import React, { createRef } from "react";
import Section1 from "./sections/section1/Section1";
import SECRET from "../JS/secrets";

const url = SECRET.URL_WS_SERVER

class Chat extends React.Component {
  constructor(conection) {
    super(conection);
    this.state = {
      conection: conection.conection,
      socket: createRef(),
      message: '',
    };
  }

  connectWS() {
    const socket = this.state.socket;
    const { _event, email } = this.state.conection;

    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      const message = {
        event: _event,
        data: {
          email: email,
          online: true,
        },
      };
      socket.current.send(JSON.stringify(message));
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.event) {
        case "connection":
          console.log(message, "conect");
          break;
          
        case "message":
          console.log(message.data, "mess");
          break;

        default:
          console.log("socket default");
          break;
      }
    };
    socket.current.onclose = () => {
      console.log("socket closed");
    };
    socket.current.onerror = () => {
      console.log("mi ban nito exav ");
    };
  }

  render() {
    return (
      <>
        <Section1 />
      </>
    );
  }
}

export default Chat;
