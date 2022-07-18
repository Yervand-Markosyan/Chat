import React  from "react";
import Fetch from "..//JS/services/fetch";
import { Link } from "react-router-dom";
import "./styles.css/singin.css";

class SignIn extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  changeEmailState = e => {
    this.setState({ email: e.target.value });
  };
  changePasswordState = e => {
    this.setState({ password: e.target.value });
  };
  sendDataSignin = () => {
    if (this.state.email.length > 4 && this.state.password.length > 4) {
      const signInInfo = {
        email: this.state.email,
        password: this.state.password
      }
      Fetch.post("auth/signin", signInInfo).then(data => {
        console.log(data);
        // localStorage.setItem("thisUserAbout", data.thisUserAbout)
        // window.location.href = "http://localhost:3000/chat"
        console.log(data);
      }).then(res => {
        console.log(res);
      })
    }
  };
  render() {
    return (
      <div className="signinBody">
        <div className="signinForm">
          <div className="signIn">
            <h2>Hello!</h2>
            <p>Sing into Tour account</p>

            <input
              className="inp2"
              type="text"
              placeholder="Email@.goo"
              onChange={this.changeEmailState}
              value={this.state.email}
            ></input>

            <input
              className="inp2"
              type="password"
              placeholder="Password"
              onChange={this.changePasswordState}
              value={this.state.password}
            ></input>

            <div className="check">
              <input className="box" type="checkbox" name="" id="" />
              <label className="me"> Remember me</label>
            </div>
            <button onClick={this.sendDataSignin}>Sign In</button>
            <Link to="/auth/signup" id="linkSignUp">Create Acaunt</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
