import React from 'react'
import './AllTournaments.css'
import TournamentCard from '../Components/HomeComp/TournamentCard';
import '@material-ui/icons'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
function AllTournaments({width}) {
    return (
        <div className='all-tourn'>
            <div className='title'>all tournaments</div>
            <div className='sub-title'>View all of our upcoming tournaments</div>
            <div className='filter-cont' style={width>'800' ? {display:'none'} : {display:'flex'}}><div style={{fontSize:'small', fontFamily:'arial'}}>Filter</div></div>
            <div className='cards-sec'>
                    <TournamentCard width={width}></TournamentCard>
                    <TournamentCard width={width}></TournamentCard>
                    <TournamentCard width={width}></TournamentCard>
                    <TournamentCard width={width}></TournamentCard>
                    <TournamentCard width={width}></TournamentCard>
                    <TournamentCard width={width}></TournamentCard>
            </div>
            <div className='navigation-cont' style={width>'800' ? {display:'none'} : {display:'flex'}}>
                    <div className='page-num'>1 - 6 of 6</div>
                    <div className='arrow-cont'>
                        <ArrowBackIos fontSize='small'></ArrowBackIos>
                        <ArrowForwardIos fontSize='small'></ArrowForwardIos>
                    </div>
            </div>
        </div>
    )
}

export default AllTournaments
