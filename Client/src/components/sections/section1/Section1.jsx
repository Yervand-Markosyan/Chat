import React, { useState, useEffect } from "react";
import "./section1.css";
import Search from "./Search";
import OnlyGroups from "./filter/OnlyGroups";
import All from "./filter/All";
import OnlyChats from "./filter/OnlyChats";

import fetch from "..//..//..//JS/services/fetch";

function Section1() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [sessionStorage, setSessionStorage] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);
  const [openAll, setOpenAll] = useState(true);

  const handleChatClick = () => {
    if (openChat) return;
    setOpenChat(!openChat)
    setOpenGroup(openChat)
    setOpenAll(openChat)
  };

  const handleGroupClick = () => {
    if (openGroup) return;
    setOpenChat(openChat)
    setOpenGroup(!openChat)
    setOpenAll(openChat)
  };

  const handleAllClick = () => {
    if (openAll) return;
    setOpenChat(openChat)
    setOpenGroup(openChat)
    setOpenAll(!openChat)
  };

  if (error) {
    return "popup error";
  }

  return (
    <div className="section1">
      <Search />
      <div className="navigations">
        <div className="hover" onClick={handleChatClick}>
          <p className={`filt ${openChat ? "highlightedWord" : ""}`}>Chat</p>
        </div>

        <div className="hover" onClick={handleGroupClick}>
          <p className={`filt ${openGroup ? "highlightedWord" : ""}`}>Group</p>
        </div>

        <div className="hover" onClick={handleAllClick}>
          <p className={`filt ${openAll ? "highlightedWord" : ""}`}>All</p>
        </div>
      </div>

      <div className="filters">
        {openChat ? <OnlyChats /> : openGroup ? <OnlyGroups /> : <All />}
      </div>
    </div>
  );
}

export default Section1;
