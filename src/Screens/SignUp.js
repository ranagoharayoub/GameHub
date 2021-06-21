import React, { Component } from 'react'
import './SignUp.css'

export default class SignUp extends Component {

    render() {
        return (
            <div className='signup-cont'>
                <div className='signup-sect'>
                    <div className='title'>STEP UP YOUR GAME JOIN TODAY</div>
                    <div className='subtitle'>Already a member?<div style={{color:'#F69204', marginLeft:'5px'}}> Sign in</div></div>
                    <form className='form-sect'>
                            <input required className='input-fields' type='text' placeholder='Username'></input>
                            <input required className='input-fields' type='email' placeholder='Email Address'></input>
                            <input required className='input-fields' type='password' placeholder='Create Password'></input>
                            <div className='issues'>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div>10 characters</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div>Upper Case</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div>Lower Case</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div>Numbers</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div>Symbols</div>
                                </div>
                            </div>
                            <input required className='input-fields' type='password' placeholder='Confirm Password'></input>
                            <label className='phone'>Phone Number</label>
                            <div>
                            <input required style={{width:'20%', borderRight: '1px solid white'}} placeholder='+1' className='input-fields' type="tel"></input>
                            <input required style={{width:'80%'}} className='input-fields' type="tel" placeholder='e.g. 1324568974555'></input>
                            </div>
                            <select name="time" className='input-fields' id="pet-select">
                                <option value="">Your preferred time zone</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            </select>
                            <label className='phone'>Date of Birth</label>
                            <div className='dob-sec'>   
                                <select className='dob'>
                                    <option value="">Day</option>
                                </select>
                                <select className='dob'>
                                    <option value="">Month</option>
                                </select>
                                <select className='dob'>
                                    <option value="">Years</option>
                                </select>
                            </div>
                            <div className='captcha'>
                                <input style={{width:'60%', backgroundColor:"white"}} className='input-fields'></input>
                                <div style={{width:'35%', display:'flex', alignItems:'center'}} className='input-fields'>Captcha code</div>
                            </div>
                            <div className='check-policy'>
                                <input className='checkbox' type='checkbox'></input>
                                <div className='checkbox-label'>Click to accept Terms and Conditions and Privacy Policy.</div>
                            </div>
                            <div className='check-policy'>
                                <input className='checkbox' type='checkbox'></input>
                                <div className='checkbox-label'>I certify that I am at least 18 years of age and don't already have another GameHub account.</div>
                            </div>
                            <button className='input-fields' style={{marginTop:'50px', backgroundColor:'#F69204', fontFamily:'Arial', fontSize:'large', fontWeight:'600'}} >JOIN NOW</button>
                    </form>
                </div>
            </div>
        )
    }
}
