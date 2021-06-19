import React from 'react'
import './Home.css'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Corousal from '../Components/HomeComp/Corousal'
import TournamentCard from '../Components/HomeComp/TournamentCard';
import StatsCard from '../Components/HomeComp/StatsCard';
import WinnerCard from '../Components/HomeComp/WinnerCard';
import NewsCard from '../Components/HomeComp/NewsCard';

function Home() {

    const options = {
        items: 5,
        dotsEach: true,
        rewind: true,
        autoplay: false,
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
            <div className='stats-cont'>
                <div className='title'>statistics</div>
                <div className='card-flex'>
                    <StatsCard img='/icons/champions_crowned.png' number='4,325' title='CHAMPIONS CROWNED'></StatsCard>
                    <StatsCard img='/icons/winnings_paid.png' number='$57,000' title='WINNINGS PAID'></StatsCard>
                    <StatsCard img='/icons/active_tournaments.png' number='76' title='ACTIVE TOURNAMENTS'></StatsCard>
                </div>
            </div>
            <div className='champ-cont'>
                <div className='title'>CHAMPIONS OF THE WEEK</div>
                <div className='winner-cont'>
                    <div className='corner-cards'><WinnerCard></WinnerCard></div>
                    <div className='center-card'><WinnerCard yellow={true}></WinnerCard></div>
                    <div className='corner-cards'><WinnerCard pale={true} ></WinnerCard></div>
                </div>
            </div>
            <div className='game-news'>
                <div className='title'>GAMEHUB NEWS</div>
                <div className='game-news-cards'>
                    <NewsCard></NewsCard>
                    <NewsCard></NewsCard>
                    <NewsCard></NewsCard>
                </div>
            </div>
        </div>
    )
}

export default Home
