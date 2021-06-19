import React from 'react'
import './TournamentCard.css'

function TournamentCard() {
    return (
        <div className='tourn-card'>
            <div className='upper'>
                <div className='img-badge'>
                    <img className='tourn-img' src='https://wallpaperaccess.com/full/2314507.jpg' alt='img'></img>
                    <img className='badge' src='/icons/badge.png' alt='badge'></img>
                </div>
                <div className='tourn-cont'>
                        <div className='tourn-title'>5v5 FIFA CHIP</div>
                        <div className='tourn-time'>
                            <div className='time'>Jun 10, 2:30 PM ET</div>
                            <div className='starts'>Starts in 1H 35 M</div>
                        </div>
                        <div className='score-cont'>
                            <div className='column'>
                                <div className='entry'>ENTRY</div>
                                <div className='numbers' style={{display:'flex'}}> 10 <div style={{fontSize:'small', marginLeft:'5px'}}>credits</div></div>
                            </div>
                            <div className='column'>
                                <div className='entry'>TEAM SIZE</div>
                                <div className='numbers'>2v2</div>
                            </div>
                            <div className='column'>
                                <div className='entry'>MAX TEAMS</div>
                                <div className='numbers'>5</div>
                            </div>
                            <div className='column'>
                                <div className='entry'>ENTERED</div>
                                <div className='numbers'>5</div>
                            </div>
                            <div className='column'>
                                <div className='entry'>PLATFORM</div>
                                <div className='numbers' style={{fontSize:'small'}}> XBOX,PS5, PC,MOBILE</div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='bottom'>
                    <div className='view-details'>VIEW DETAILS</div>
                    <img style={{marginLeft:'2px'}} src='/icons/right-arrow .png' alt='arrow'></img>
            </div>
        </div>
    )
}

export default TournamentCard
