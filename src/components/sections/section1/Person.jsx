import React from "react";

class Person extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
           online : props.online,
           date: props.date,
           name: props.name,
           lastname: props.lastname,
           lastmessage: props.lastmessage,
           img: props.img,
        }
    }

    
    render(){
        return(
            <div className="person" key={this.props._id}>
                 <div className="avatar">
                       <img src={this.props.src} alt='img'></img>
                 </div>
                 <div className="personAbout">
                     <div className="fullName">
                       <p>{`${this.props.name} ${this.props.lastname}`}</p> 
                       <div className={this.state.online === "online"?'online':'offline'}></div>
                       <p>...</p>
                     </div>
                       <p className="lastMessage">{this.props.lastmessage}</p>
                       <p className="lastMessDate">{this.props.date}</p>
                </div>
                 <div className="newMessage"></div>
            </div>
        )
    }
}

export default Person