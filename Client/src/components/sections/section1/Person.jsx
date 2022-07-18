import React from "react";
import '..//..//styles.css/person.css'

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      online: props.online,
      date: props.date,
      name: props.name,
      lastname: props.lastname,
      lastmessage: props.lastmessage,
      img: props.img
      //    people: [] <-- WS folder
    };
  }

  render() {
    return (
      <div className="chatInfo" key={this.props._id}>
        <div className="personAbout">
          <div
            className="avatar"
            style={{
              backgroundImage:
                "url( https://mir-avatarok.3dn.ru/avatarki/specnaz/5f0a48f8c2cf4980db22d4f1881024c3.jpg)"
            }}
          >
            <div className="online"></div>
          </div>
          <div className="name_mess">
            <div className="fullName">
              <p>{`Admin Creatoich`}</p>
            </div>
            <div className="lastMess">
              <p className="lastMessage">Barev!</p>
              <p className="lastMessDate">21:58</p>
            </div>
          </div>
        </div>
        <div className="status">
          <div className="ofline"></div>
        </div>
      </div>
    );
  }
}

export default Person;
