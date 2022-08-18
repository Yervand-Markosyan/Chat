import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchDropDown from "./SearchDropDown";
import "./section1.css";

const Search = () => {
  const users = useSelector(state => state.setSearchUsers.searchUsers);

  const [search, setSearch] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const [usersNames, setUsersNames] = useState([]);
  const [usersLastnames, setUsersLastnames] = useState([]);
  //   const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    users.map(item => {
      let fullName = item.fullname.toLowerCase().split(" ");
      arr1.push(fullName[0]);
      arr2.push(fullName[1]);
    });
    setUsersNames(arr1);
    setUsersLastnames(arr2);
  }, [users]);

  useEffect(() => {
    let arr = [];

    usersNames.map(item => {
      if (
        search.length > 0 &&
        search.toLowerCase() === item.slice(0, search.length)
      ) {
        console.log(item);

        users.map(user => {
          if (user.fullname.toLowerCase().split(" ")[0] === item) {
            arr.push(user);
          }
        });
      }
    });
    usersLastnames.map(item => {
      if (search.toLowerCase() === item.slice(0, search.length)) {
        users.map(user => {
          if (user.fullname.toLowerCase().split(" ")[1] === item) {
            if (
              user.fullname[0].toLowerCase() !== user.fullname.toLowerCase().split(" ")[1][0]
            )
              arr.push(user);
          }
        });
      }
    });
    setSearchUsers(arr);
    // setIsSearch(true);
  }, [search]);

  return (
    <>
      <div className="search">
        <p>Conversation</p>
        <input
          className="searchInput"
          placeholder="⌕ Search"
          onChange={e => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        {search.length ? <SearchDropDown props={searchUsers}  /> : null}
      </div>
    </>
  );
};

export default Search;
