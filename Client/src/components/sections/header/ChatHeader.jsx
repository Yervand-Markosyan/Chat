import React from "react";
import "./chatHeader.css";
import logo from "..//..//..//icons/big-logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChatHeader = () => {

  const [dropDown, setDropDown] = useState(false)
  const loggedUser = useSelector(state => state.setLoggedUser.thisUser)
  const down = "\u2B9F";
  const up = "\u2B9D";
  const showDropDown = () => {

    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  return (
    <div className="Cheader">
      <img className="headerLogo" src={logo} alt="img"/>
      <div className="aboutDev">
        <div className="aboutStyle">About the creators of chat</div>
      </div>
      <div className="thisPerson">
        <i className="material-icons">
          &#xe7f7;<div className="newMess"></div>
        </i>
        <img
          className="thisImg"
          src={loggedUser?loggedUser.imgs[0]:"" }
          alt="img"
        />
        <p className="thisFullName">{loggedUser?loggedUser.fullName:""}</p>
        <p onClick={showDropDown} className="dropSleck">
          {dropDown ? up : down}
        </p>
      </div>
    </div>
  );
}


export default ChatHeader;
