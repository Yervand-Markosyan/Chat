import React from "react";
import { useSelector } from "react-redux";

export default function ThisUserMessage(props) {
  const data = useSelector(state => state.setLoggedUser.thisUser);
  console.log(data);

  return (
    <>
      <div className="leftMessage">
        <p className="messageContent">{props.value}</p>
      </div>

      <div
        className="thisUserPic"
        style={{ backgroundImage: `url(${data.imgs[0]})` }}
      />
    </>
  );
}
