import React from 'react'
import './MobileMenu.css'
import { ArrowDropDown } from '@material-ui/icons'
function MobileMenu({menuOn}) {
    return (
        <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Find players/Teams</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/alert.png' height='20px' alt='icon'></img>
                <div className='title'>FAQ</div>
            </div>
            <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    <ArrowDropDown></ArrowDropDown>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu
