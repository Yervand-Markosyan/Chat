import React from "react";
import Fetch from "..//JS/services/fetch";
import Chat from './Chat'
import image from './2.jpg'
import './styles.css/SingIn.css'



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
      <div className="form">
      <div className="signIn">
        <h2>Hello!</h2>
        <p>Sing into Tour account</p>
      
        <input className="inp"
          type="text"
          placeholder="Email@.goo"
          onChange={this.changeEmailState}
          value={this.state.email}
        ></input>
     
        <input className="inp"
          type="password"
          placeholder="Password"
          onChange={this.changePasswordState}
          value={this.state.password}
        ></input>

        <div className="check"> 
           <input className="box" type="checkbox" name="" id="" />
           <label className="me"> Remember me</label> 
         </div>
        <button onClick={this.sendDataSignin}>Sign in</button>
      </div>
      <div className = 'reg' style ={{backgroundImage: "url(" + image + ")"}}></div>
       </div>
    );
  }
}
export default SignIn;
