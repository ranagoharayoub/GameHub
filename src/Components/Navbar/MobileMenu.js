import React from 'react'
import './MobileMenu.css'
import { ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function MobileMenu({menuOn, off}) {
    return (
        <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
            <div className='ico-title'>
                <img src='/icons/search.png' height='20px' alt='icon'></img>
                <div className='title'>Find players/Teams</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/home.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </div>
            <Link onClick={off} className='ico-title' to='/tournament'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/dollar.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/chart.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/news.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div>
            <Link onClick={off} to='/settings' className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Settings</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
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
