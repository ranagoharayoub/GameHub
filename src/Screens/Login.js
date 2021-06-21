import React, { Component } from 'react'
import './Login.css'
export default class Login extends Component {

    render() {
        return (
            <div className='login-cont'>
                <div className='login-sect'>
                    <div className='title'>SIGN IN</div>
                    <div className='subtitle'>Not a member Yet?<div style={{color:'#F69204', marginLeft:'5px'}}>Join Free!</div></div>
                    <div className='social-login-fb'>
                        <img src='/icons/fb.png' height='20px' alt='fb'></img>
                        <div className='title'>Continue with Facebook</div>
                    </div>
                    <div className='social-login-google' style={{backgroundColor:'white'}}>
                        <img src='/icons/google.png' height='20px' alt='fb'></img>
                        <div className='title'>Continue with Google</div>
                    </div>
                    <form className='form-sect'>
                        <label className='label'>Email Address</label>
                        <input className='input-fields' required type='email'></input>
                        <label className='label'>Password</label>
                        <input className='input-fields' required type='password'></input>
                        <div className='forgot'>Forgot Password?</div>
                        <div className='check-policy'>
                                <input className='checkbox' type='checkbox'></input>
                                <div className='checkbox-label'>Remember me on this Device</div>
                        </div>
                        <button className='input-fields' style={{marginTop:'50px', backgroundColor:'#F69204', fontFamily:'Arial', fontSize:'large', fontWeight:'600', border:'none'}} >Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
