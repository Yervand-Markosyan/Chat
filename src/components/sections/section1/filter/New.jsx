import React from 'react'
import '..//section1.css'

class NewChat extends React.Component{
    render(){
        const down = "\u2B9F"
        const up = "\u2B9D"
        return(
            <p className = 'filt'>New Chat <span>{false ? down : up}</span></p>
            
        )
    }
}

export default NewChat;