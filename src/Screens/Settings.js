import { Save } from '@material-ui/icons'
import React from 'react'
import './Settings.css'
function Settings() {
    return (
        <div className='settings-cont'>
            <div className='title'>ACCOUNT SETTINGS</div>
            <div className='settings-sec'>  
                <form className='setting-form'>
                    <div className='subtitle'>ACCOUNT INFO</div>
                    <div className='flex' style={{alignItems:'center'}}>
                        <div className='col'>
                            <label className='label'>Username</label>
                            <div className='flex'>
                                <input className='input'></input>
                                <Save style={{color:'white', marginRight:'10px'}}></Save>
                            </div>   
                        </div>
                        <div className='col'>
                            <label className='label'>Email</label>
                            <div className='flex'>
                                <input className='input'></input>
                                <Save style={{color:'white'}}></Save>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <label className='label'>Phone Number</label>
                        <div className='flex' >
                            <input className='input'></input>
                            <div className='btn'>Save Phone</div>
                        </div>
                    </div>
                    <hr className='hr'></hr>
                    <div className='subtitle'>CHANGE PASSWORD</div>
                    <div className='flex' style={{alignItems:'flex-start', marginTop:'10px'}}>
                        <input className='input'></input>
                        <div className='col'>
                            <input className='input'></input>
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
                        <input className='input'></input>
                        <div className='btn'>Change</div>
                    </div>
                    <hr></hr>
                    <div className='subtitle'>Location</div>
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
                        <div className='btn'>Change Timezone</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings
