import React, { useState } from "react";
import "./section1.css";
import Search from "./Search";
import OnlyGroups from "./filter/OnlyGroups";
import All from "./filter/All";
import OnlyChats from "./filter/OnlyChats";
import CreateGroupPopUp from "./CreateGroupop";


function Section1() {
  const [error, setError] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);
  const [openAll, setOpenAll] = useState(true);

  const handleChatClick = () => {
    setOpenChat(true)
    setOpenGroup(false)
    setOpenAll(false)
  };

  const handleGroupClick = () => {
    setOpenChat(false)
    setOpenGroup(true)
    setOpenAll(false)
  };

  const handleAllClick = () => {
    setOpenChat(false)
    setOpenGroup(false)
    setOpenAll(true)
  };

  if (error) {
    return "popup error";
  }

  return (
    <>
    <CreateGroupPopUp/>
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
    </>
  );
}

export default Section1;
