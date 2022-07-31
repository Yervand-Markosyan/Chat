import React, { useState } from "react";
import "./section3.css";
import pict from "./icons/facebook.svg";

function Pictures(props) {
  const [files, setFiles] = useState([pict, pict, pict, pict, pict, pict]);

  return (
    <>
      <div className="section3Openedfiles">
        {files.map(item => {
            return <img className="section3Openedfile" src={item} alt='/' key={Date.now()} />;
        })}
      </div>
    </>
  );
}

export default Pictures;
