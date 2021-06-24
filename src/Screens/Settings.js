import { Save } from '@material-ui/icons'
import React, { useState } from 'react'
import './Settings.css'
function Settings({width}) {

    return (
        <div className='settings-cont'>
            <div className='title'>ACCOUNT SETTINGS</div>
            <div className='settings-sec'>  
                <form className='setting-form'>
                    <div className='subtitle'>ACCOUNT INFO</div>
                    <div className='flex' style={ width<'800'?{alignItems:'unset'}:{alignItems:'center'}}>
                        <div className='col'>
                            <label className='label'>Username</label>
                            <div className='flex' style={width<'800'? {flexDirection:'row', alignItems:'center'}: null}>
                                <input className='input'  style={width<'800'?{width: '80vw',}: null}></input>
                                <Save style={ width<'800'?{marginRight:'0px',color:'white'}:{color:'white', marginRight:'10px'}}></Save>
                            </div>   
                        </div>
                        <div className='col'>
                            <label className='label'>Email</label>
                            <div className='flex' style={width<'800'? {flexDirection:'row', alignItems:'center'}: null}>
                                <input className='input' style={width<'800'?{width: '80vw'}: null}></input>
                                <Save style={{color:'white'}}></Save>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <label className='label'>Phone Number</label>
                        <div className='flex' style={width<'800'? {flexDirection:'row', alignItems:'center'}:null}>
                            <input className='input' type='tel' placeholder='+1' style={width<'800'?{width: '10vw', marginRight:'0px', borderRight:'1px solid white'}: {width:'10%', marginRight:'0px', borderRight:'1px solid white'}}></input>
                            <input className='input' type='tel' placeholder='e.g. 1324568974555' style={width<'800'?{width: '70vw'}: null}></input>
                            {
                                width>'800'?
                                <div className='btn'>Save Phone</div>
                                :
                                <Save style={{color:'white' ,}}></Save>
                            }
                        </div>
                    </div>
                    <hr className='hr'></hr>
                    <div className='subtitle'>CHANGE PASSWORD</div>
                    <div className='flex' style={{alignItems:'flex-start', marginTop:'10px'}}>
                        <input className='input' type='password' placeholder='Confirm Password' style={width>'800'?{width:'25%'}: null}></input>
                        <div className='col'>
                            <input className='input' type='password' placeholder='Create Password' style={width>'800'?{width:'98%'}: null}></input>
                            <div className='issues'>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div style={{marginLeft:'10px'}}>10 characters</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div style={{marginLeft:'10px'}}>Upper Case</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div style={{marginLeft:'10px'}}>Lower Case</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div style={{marginLeft:'10px'}}>Numbers</div>
                                </div>
                                <div className='warning'>
                                    <img src='/icons/cancel.png' alt='cancel'></img>
                                    <div style={{marginLeft:'10px'}}>Symbols</div>
                                </div>
                            </div>
                        </div>
                        <input className='input' type='password' placeholder='Current Password' style={width>'800'?{width:'25%'}: null}></input>
                        <div className='btn'  >Change Password</div>
                    </div>
                    <hr></hr>
                    <div className='subtitle' style={{marginTop:'15px'}}>LOCATION</div>
                    <div className='flex' >
                        <div className='col'>
                        <label className='label'>Area</label>
                            <select className='input'>
                                <option value='Eastern'>Eastern</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label className='label'>Region</label>
                            <input className='input'></input>
                        </div>
                        {
                            width>"800"?
                            <div className='btn'>Change Timezone</div>
                            :
                            <div className='save-btn'>Save</div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings
