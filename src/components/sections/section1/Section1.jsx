import React from 'react'
import './section1.css'
import Search from './Search'
import Recent from './filter/Recent'
import NewChat from './filter/New'
import Person from './Person'

class Section1 extends React.PureComponent{
    constructor(props){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='section1'>
                <Search/>
                <div className = 'filters'>
                    <Recent/>
                    <NewChat/>
                </div>
                <Person/>
            </div>
        )
    }

}

export default Section1;