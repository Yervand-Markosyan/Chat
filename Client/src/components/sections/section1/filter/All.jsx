import React from "react";
import Person from "..//Person";
import Group from "..//Group";
import CreatGroup from "../createGroup";
import { useSelector } from "react-redux";
import "..//section1.css";

function All() {
  const persons = useSelector(state => state.setConversations.conversations);
  const groups = useSelector(state => state.setGroups.groups)
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
            <CreatGroup/>
            {groups.map(item => {
                return <Group data={item} key={item._id}/>
              })}

          </div>
        </div>
      </div>
    </>
  );
}

export default All;