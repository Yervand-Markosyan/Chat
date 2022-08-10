import React from "react";
import "./group.css"
export default function Group(data){
   const info = data.data


    return (
      <div className="groupInfo" key={info._id+1}>
          <img src={info.img} alt="img" className="avatar_group" ></img>
        <div className="personAbout">
          <div className="fullName">
            <h3>{info.name}</h3>
          </div>
          {/* <p className="lastMessage">{this.props.lastmessage}</p>
          <p className="lastMessDate">{this.props.date}</p> */}
        </div>
        <div className="newMessage"></div>
      </div>
    );
  }

