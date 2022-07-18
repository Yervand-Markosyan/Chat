import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);    
  };

  return (
    <div>
      <Picker onClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;