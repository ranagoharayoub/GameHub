import React from 'react'
import './AllGames.css'
import GameCard from '../Components/GameComp/GameCard'
function AllGames() {
    return (
        <div className='all-games'>
             <div className='title'>all games</div>
            <div className='sub-title'>Select a game to view all of its upcoming tournaments</div>
            <div className='cards-sec'>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
            </div>
        </div>
    )
}

export default AllGames
