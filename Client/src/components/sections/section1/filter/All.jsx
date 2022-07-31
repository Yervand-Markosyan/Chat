import React, { useEffect } from "react";
import Person from "..//Person";
import Group from "..//Group";
import { useSelector } from "react-redux";
import "..//section1.css";

function All() {
  const error = false;
  const persons = useSelector(state => state.setConversations.conversations);
useEffect(() => {
  console.log(448);
  
}, [])
  if (error) {
    return "popup error";
  }

  return (
    <>
      <div className="twoChatZone">
        <div className="border">
          <p>Persons</p>
          <div className="zone">
            <div className="personZone">
              {persons.map(convers => {
                return <Person props={convers} key={convers._id}/>;
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="border">
          <p>Groups</p>
          <div className="zone">
            {/* Գենեռացվող */}
            <Group />
            <Group />
            <Group />
            <Group />
          </div>
        </div>
      </div>
    </>
  );
}

export default All;