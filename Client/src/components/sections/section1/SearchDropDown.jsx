import React, { useMemo } from "react";
import SearchedUser from "./SearchedUser";
import notResult from "..//..//..//icons/no-results.png";

export default function SearchDropDown({ props }) {
  const idMemo = useMemo(() => {
    return props
  }, [props])

  if (props.length) {
    return (
      <>
        <ul className="dropdown">
          {idMemo.map(item => (
            <li key={item.user_id}>
              <SearchedUser props={item.user_id} />
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <ul className="dropdown">
      <div className="userIsNotFoundDiv">
        <img className="userIsNotFoundIcon" src={notResult} alt="not found" />
        <p className="userIsNotFound">User is not found</p>
      </div>
    </ul>
  );
}
