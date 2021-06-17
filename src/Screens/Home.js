import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home-cont'>
            <div className='navbar'>
                <div className='Links'>
                    <div>HOMES</div>
                    <div>GAMES</div>
                    <div>TOURNAMENT</div>
                </div>
                <div className='title'>
                <img src='/icons/gamehub.png' height='30px' alt='search'></img>
                </div>
                <div className='icons-div'>
                    <div className='icons'>
                        <img src='/icons/search.png' height='12px'  alt='search'></img>
                        <img src='/icons/bell.png' height='12px' alt='search'></img>
                        <img src='/icons/dp.png' height='28px' alt='search'></img>
                        <div>Name</div>
                        <img src='/icons/dropdown.png' height='6.1px' alt='search'></img>
                    </div>
                </div>
            </div>
            <div className='main-cont'>
                <div className='find'>FIND YOUR <br></br>PERFECT TOURNAMENT</div>
                <button  className='play'>Play</button>
            </div>
        </div>
    )
}

export default Home
