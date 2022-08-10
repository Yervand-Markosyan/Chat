import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";

const Emoji = (Emoji) => {
console.log(Emoji);
  const dispatch = useDispatch()

  const onEmojiClick = (event, emojiObject) => {
    Emoji.props.setMessage(Emoji.props.message + emojiObject.emoji)
  };

  return (
    <div className='emoji-picker-react'>
      <i className="fa fa-plus close_emoji" onClick={() => { dispatch({ type: "IS_OPEN_POP", payload: false }) }}></i>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;