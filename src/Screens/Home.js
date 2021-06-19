import React from 'react'
import './Home.css'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Corousal from '../Components/HomeComp/Corousal'
import TournamentCard from '../Components/HomeComp/TournamentCard';


function Home() {

    const options = {
        items: 5,
        dotsEach: true,
        rewind: true,
        autoplay: true,
        nav: true,
        navText : ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>']
    };

    return (
        <div className='home-cont'>
            <div className='main-cont'>
                <div className='find'>FIND YOUR <br></br>PERFECT TOURNAMENT</div>
                <button  className='play'>Play</button>
            </div>
            <div className='games-corousal'>
                <div className='game-title'>GAMES</div>
                <div className='select'>Select a game and choose an available tournament</div>
                <OwlCarousel options={options} >
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                    <div><Corousal></Corousal></div>
                </OwlCarousel>
            </div>
            <div className='featured-tournament'>
                <div className='title'>FEATURED TOURNAMENTS</div>
                <div className='hot'>Hot and trending tournaments</div>
                <div className='card-grid'>
                    <TournamentCard></TournamentCard>
                    <TournamentCard></TournamentCard>
                    <TournamentCard></TournamentCard>
                    <TournamentCard></TournamentCard>
                    <TournamentCard></TournamentCard>
                    <TournamentCard></TournamentCard>
                </div>
                <button className='view-btn'>view all</button>
            </div>
        </div>
    )
}

export default Home
