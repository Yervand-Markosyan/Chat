import React from "react";
import Fetch from "..//JS/services/fetch";
import Chat from './Chat'

class SignIn extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      _event: "connection",
      email: "",
      password: "",
      signin: false
    };
  }

  changeEmailState = (e) => {
    this.setState({ email: e.target.value });
  };
  changePasswordState = (e) => {
    this.setState({ password: e.target.value });
  };
  sendDataSignin = () => {
    // const {socket, _event, email } = this.state;
    if (this.state.email.length > 4 && this.state.password.length > 4) {
      Fetch.post("signin", this.state)
      .then((data) => {
        this.setState({signin:true})
       });
    }
  };
  render() {
    if (this.state.signin) {
      return <Chat conection = {{
        _event: "connection",
        email:this.state.email
      }}/>
    }
    return (
      <div className="signIn">
        <input
          type="text"
          placeholder="Email@.goo"
          onChange={this.changeEmailState}
          value={this.state.email}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={this.changePasswordState}
          value={this.state.password}
        ></input>
        <br />
        <button onClick={this.sendDataSignin}>Sign in</button>
      </div>
    );
  }
}
export default SignIn;
