import React from "react";
import "..//sections/section2/section2.css";

function Time() {
  let time = '';

  switch (new Date().getDay()) {
    case 0:
      time = "Կրկ";
      break;
    case 1:
      time = "Երկ";
      break;
    case 2:
      time = "Երք";
      break;
    case 3:
      time = "Չրք";
      break;
    case 4:
      time = "Հնգ";
      break;
    case 5:
      time = "Ուրբ";
      break;
    default:
      time = "Շբթ";
      break;
  }

  return (
    <>
      <p className="messageTime">{`
        ${time}:
        ${
          new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours()
        }:${
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()
      }
        `}</p>
    </>
  );
}

export default Time;
