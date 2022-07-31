import React, { useState } from "react";
import "./section3.css";
import pict from "./icons/facebook.svg";

function Pictures(props) {
  const [pics, setPics] = useState([pict, pict, pict, pict, pict, pict]);

  return (
    <>
      <div className="section3Openedimages">
        {pics.map(item => {
            return <img className="section3OpenedImage" src={item} alt='/' key={Date.now()} />;
        })}
      </div>
    </>
  );
}

export default Pictures;
