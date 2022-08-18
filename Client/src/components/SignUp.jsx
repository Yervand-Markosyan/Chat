import React from "react";
import "./stylesCSS/signup.css";
import Fetch from "../JS/services/fetch.js";
import { Link } from "react-router-dom";

class SignUp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      img: "",
      disabled: true,
      avatarImgs: [
        "http://localhost:3030/chatpx/files/62cf6774f8ecd9a1acf55d7a/noImgMen.PNG",
        "http://localhost:3030/chatpx/files/62cf6531ae2566236a224b97/noImgWuman.PNG"
      ]
    };
  }

  render() {
    return (
      <>
        <div className="signupBody">
            <div className="signupForm">
                <h4>Registration</h4>
                  <input
                    className="inp"
                    onChange={e => this.setState({ name: e.target.value })}
                    type="text"
                    value={this.state.name}
                    placeholder=" First Name"
                  />
                  <input
                    className="inp"
                    onChange={e => this.setState({ lastname: e.target.value })}
                    type="text"
                    value={this.state.lastname}
                    placeholder=" Last Name"
                  />
                  <input
                   className="inp"
                    onChange={e => this.setState({ email: e.target.value })}
                    type="email"
                    value={this.state.email}
                    placeholder=" Email Address"
                  />
                  <input
                   className="inp"
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                    value={this.state.password}
                    placeholder=" Password"
                  />
                  <div className="gender">
                    <label htmlFor="men">Men</label>
                    <input
                      type="radio"
                      id="men"
                      name="gender"
                      onClick={e => {
                        this.setState({ gender: e.target.id });
                        this.setState({ img: this.state.avatarImgs[0] });
                      }}
                    />
                    <label htmlFor="women">Women</label>
                    <input
                      type="radio"
                      id="women"
                      name="gender"
                      onClick={e => {
                        this.setState({ gender: e.target.id });
                        this.setState({ img: this.state.avatarImgs[1] });
                      }}
                    />
                  </div>
                  <div className="info">
                    <input
                      className="range"
                      type="checkbox"
                      onClick={e => {
                        if (
                          e.target.checked &&
                          !Object.values(this.state).includes("")
                        ) {
                          this.setState({ disabled: false });
                        }
                      }}
                    />
                    <p className="trush">
                      I trust the creators of the site and provide my
                      information{" "}
                    </p>
                  </div>
                <button className="signupFormbutton"
                  onClick={() => {
                    const regInfo = {
                      name: this.state.name,
                      lastname: this.state.lastname,
                      email: this.state.email,
                      password: this.state.password,
                      gender: this.state.gender,
                      imgs: [this.state.img]
                    };
                    Fetch.post("auth/signup", regInfo)
                    .then(data => {
                      console.log(data);
                      localStorage.setItem("loggedUser_id", JSON.stringify(data.loggedUser_id));
                      localStorage.setItem("token", JSON.stringify(data.token));
                      window.location.href = "/chat";
                    });
                    this.setState({
                      name: "",
                      lastname: "",
                      email: "",
                      password: "",
                      img: "",
                      gender: "",
                      disabled: true
                    });
                  }}
                  disabled={this.state.disabled}
                >
                  Create Account
                </button>
                
            <Link to="/" id="signinLink">Sign In</Link>
                </div>

              </div>
            {/* </div> */}
          {/* </div> */}
      </>
    );
  }
}

export default SignUp;
