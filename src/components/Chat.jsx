import React from "react";
import ChatHeader from "./sections/header/ChatHeader";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import "./styles.css/chat.css";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <div className='sections'>
          <Section1 />
          <Section2 />
          {true ? <Section3/> : null}
        </div>
      </div>
    );
  }
}

export default Chat;
