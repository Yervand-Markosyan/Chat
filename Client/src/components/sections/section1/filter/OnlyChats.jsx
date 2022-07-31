import React from "react";
import Person from "..//Person";
import { useSelector } from "react-redux";
import "..//section1.css";

function OnlyChats() {
  const error = false;
  const persons = useSelector(state => state.setConversations.conversations);

  if (error) {
    return "popup error";
  }

  return (
    <>
      <div className="border">
        <p>Persons</p>
        <div className="zoneChat">
          <div className="personZone">
            {persons.map(convers => {
              return <Person props={convers} key={convers._id}/>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlyChats;
