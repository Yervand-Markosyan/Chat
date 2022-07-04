import React from 'react'
import './styles.css/Registration.css'
import Fetch from '../JS/services/fetch.js'
import image from './1.jpeg'

class Registration extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            img: 'nkar',
        }
    }

    render(){
        return (
            <><div className='regitrBody'>
            <div className='form'> 
            <div className = 'reg' style ={{backgroundImage: "url(" + image + ")"}}></div>
                <div className='reg2'> 
                <div className="header">
                <a href='#'>Register</a>
                </div>
               
                <div className=''>
                    <div className='nameLast'> 
                    <div> 
                         <label>First Name</label>
                         <input className='inp'  onChange={e => this.setState({name: e.target.value})} type='text' value={this.state.name} placeholder='Your First Name'/></div>
        
                    <div> 
                         <label>Last Name</label>
                         <input className='inp' onChange={e => this.setState({lastname: e.target.value})} type='text' value={this.state.lastname} placeholder=' Your Last Name'/></div>
                    </div>
                    <label>Email Address</label>
                    <input onChange={e => this.setState({email: e.target.value})} type='email' value={this.state.email} placeholder='Your Email Address'/>
                    <label>Password</label>
                    <input onChange={e => this.setState({password: e.target.value})} type='password' value={this.state.password} placeholder='Your Password'/>

                    <div className='info'>
                        <input className='range' type="checkbox"/> 
                       <div className='creators'> <p className='trush'>I trust the creators of the site and provide my information </p></div>
                    </div>
                </div>

                    <button onClick={() => {
                        Fetch.post('signup', this.state)
                        this.setState ({
                            name: '',
                            lastname: '',
                            email: '',
                            password: '',
                        })
                    }}>Create Account</button>
                
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Registration;