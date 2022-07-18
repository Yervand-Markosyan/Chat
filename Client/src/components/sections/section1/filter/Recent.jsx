import React from 'react'
import '..//section1.css'

class Recent extends React.Component{
    render(){
        const down = "\u2B9F"
        const up = "\u2B9D"
        return(
            <p className = 'filt'>Recent Chats <span>{true ? down : up}</span></p>
            
        )
    }
}

export default Recent;