import React, { useState } from 'react'
import './SideBar.css'
import {FormControlLabel,Switch} from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

function SideBar({toggle, off}) {

    const [checked, setchecked] = useState(false)

    return (
        <div className='side-cont' style={toggle? {display:'flex'} : {display:'none'}}>
            <div className='close'>
                <img onClick={off} src='/icons/close.png' height='11.56px' alt='cross' style={{cursor:'pointer'}}></img>
                <div>Name</div>
            </div>
            <div className='cash-cont'>
                <img src='/icons/alert.png' height='16px' alt='alert'></img>
                <div>Cash Matches</div>
                <FormControlLabel style={{marginLeft:'5px'}}
                    control={<Switch  size="small" checked={checked} onChange={()=> setchecked(!checked)} />}
                />
            </div>
            <div className='boxes'>
                <div className='left-box'>
                    <div style={{font: 'normal normal normal 12px/30px Bahnschrift'}}>$0.00</div>
                    <div style={{color: '#F69204', font: 'normal normal normal 15px/10px Bahnschrift'}}>+Add Cash</div>
                </div>
                <div className='right-box'>
                    <div style={{font: 'normal normal normal 12px/30px Bahnschrift'}}>0</div>
                    <div style={{color: '#F69204', font: 'normal normal normal 15px/10px Bahnschrift'}}>Buy Credit</div>
                </div>
            </div>
            <div className='view-profile'>
                <img style={{margin:'0px 10px'}} src='/icons/avatar.png' alt='avatar' height='12px'></img>
                <div>View Profile</div>
            </div>
            <div className='common' >My Matches</div>
            <div className='common' >My Teams</div>
            <div className='common' >Team Invites</div>
            <div className='common' >My Tickets</div>
            <div  className='line'></div>
            <div className='common' >My Bank</div>
            <div className='common' >Purchased Items</div>
            <div className='common' >Prize Claims</div>
            <div  className='line'></div>
            <div className='common' >Account Settings</div>
            <div className='common' >Sign out</div>
            <div className='lang'>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    <ArrowDropDown></ArrowDropDown>
                </button>
            </div>
        </div>
    )
}

export default SideBar
