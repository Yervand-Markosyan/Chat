import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import SOCKET from "../../../JS/soket_Io_client/Socket";
export default memo(function SearchedUser({ props }) {
  const data = useSelector(data => data.setSearchUsers.searchUsers);
  const conversations = useSelector(state => state.setConversations.conversations)
  const findUser = data.filter(item => item.user_id == props);
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
  const token = JSON.parse(localStorage.getItem("token")).token

  const handlerClickSearchedUser = () => {
    let arr = []
    conversations.map(item => {
      item.members[0] !== loggedUser_id && arr.push(item.members[0]);
      item.members[1] !== loggedUser_id && arr.push(item.members[1]);
    })
    if (!arr.includes(findUser[0].user_id)) {
      SOCKET.socket.emit("newConversation", { user_Id: findUser[0].user_id, loggedUser_id, token, })
    } else {
      alert("kapov eq")
    }
  };

  return (
    <div className="searchedPerson" onClick={handlerClickSearchedUser}>
      <div className="searchedAvatar">
        <img className="searchedAvatar" src={findUser[0].imgs[0]} alt="pic" />
      </div>
      <p className="searchedFullName">{findUser[0].fullname}</p>
    </div>
  );
})