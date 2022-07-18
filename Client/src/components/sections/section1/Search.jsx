import React from 'react'
import './section1.css'

class Search extends React.PureComponent{
    constructor(props){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='search'>
                <p>Conversation</p>
                <input className='searchInput' placeholder='⌕ Search'/>
            </div>
        )
    }

}

export default Search;