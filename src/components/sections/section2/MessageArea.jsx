import React from "react";
import Emoji from "./Emoji";
import "./section2.css";
import sendImg from "..//..//..//icons/logo.png";
import smile from "..//..//..//icons/smile.svg";

class MessageArea extends React.Component {
  constructor() {
    super();
    this.state = {
      emojiOpen: false,
    };
  }

  render() {
    return (
      <div className="messagePlace">
        <p>+</p>
        <textarea placeholder="Type a message here" />

        <img
          onClick={() =>
            this.setState({
              emojiOpen: !this.state.emojiOpen
            })
          }
          src={smile}
          alt="/"
          className="smile"
        />

        {this.state.emojiOpen ? <Emoji /> : null}

        <img className="send" src={sendImg} alt="sadasd/" />
      </div>
    );
  }
}

export default MessageArea;
