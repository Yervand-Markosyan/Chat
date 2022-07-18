import React from 'react';
import ChatPartnerHeader from './ChatPartnerHeader'
import MessageArea from './MessageArea'
import ChatZone from './ChatZone'
import "./section2.css";

class Section2 extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className='section2'>
                <ChatPartnerHeader />
                <ChatZone/>
                <MessageArea />
            </div>
        )
    }
}

export default Section2;