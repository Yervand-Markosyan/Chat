import React from "react";
import "./section1.css";
import Search from "./Search";
import Recent from "./filter/Recent";
import NewChat from "./filter/New";
import Person from "./Person";
import Group from "./Group";
import fetch from "..//..//..//JS/services/fetch";

class Section1 extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      users: [],
      error: false,
      sessionStorage: []
    };
  }

  // componentDidMount(){
  //     fetch('բարեկամ users', 'email')
  //     .then(data => this.setState({users: data}))
  //     .catch(e => this.setState({error: true}))
  // }

  render() {
    const { error, users, sessionStorage } = this.state;
    if (error) {
      return "popup error";
    }
    return (
      <div className="section1">
        <Search />
        <div className="filters">
          <Recent />
          <NewChat />
        </div>

        <div className="twoChatZone">
          <div className="border">
            <p>Persons</p>
            <div className="zone">
              <div className="personZone">
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
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
      </div>
    );
  }
}

export default Section1;
