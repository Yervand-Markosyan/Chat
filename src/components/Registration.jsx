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
            <div className = 'reg' ></div>
                <div className='reg2'> 
                <div className="header">
                {/* <a href='#'>Register</a> */}
                </div>
               
                <div className=''>
                    <div className='nameLast'> 
                    <div> 
                         <label>First Name</label>
                         <input className='inp'  onChange={e => this.setState({name: e.target.value})} type='text' value={this.state.name} placeholder=' First Name'/></div>
        
                    <div> 
                         <label>Last Name</label>
                         <input className='inp' onChange={e => this.setState({lastname: e.target.value})} type='text' value={this.state.lastname} placeholder=' Last Name'/></div>
                    </div>
                    <label>Email Address</label>
                    <input onChange={e => this.setState({email: e.target.value})} type='email' value={this.state.email} placeholder=' Email Address'/>
                    <label>Password</label>
                    <input onChange={e => this.setState({password: e.target.value})} type='password' value={this.state.password} placeholder=' Password'/>

                    <div className='info'>
                        <input className='range' type="checkbox"/> 
                        <p className='trush'>I trust the creators of the site and provide my information </p>
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
                   <button>Sign In</button>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Registration;