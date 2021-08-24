import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='first-cont'>
                <div className='contact-col'>
                    <div className='title'>PLATFORM</div>
                    <div className='links'>About Us</div>
                    <div className='links'>Contact</div>
                    <div className='links'> Terms & Conditions </div>
                </div>
                <div className='company-col company-col-2'>
                    <div className='title'>SUPPORT</div>
                    <div className='links'>Create a Ticket</div>
                    <div className='links'>Contact us</div>
                    <div className='links'>About us</div>
                    <div className='links'><Link style={{color:"inherit", textDecoration:'none'}} to='/faq' >FAQ</Link></div>
                </div>
            </div>
            <div className='second-cont'>
                <div className='payment-col'>
                    <img src='/icons/gamehub.png' width='35%' className='footer-logo' alt='logo'></img>
                    <img src='/icons/Payment_Trust_Badges.png' width='90%' alt='payment'></img>
                </div>          
            </div>
            <div className='last-cont'>
                <div className='social-col'>
                    <div className='social-icons'>
                        <img src='/icons/facebook.png' width='15%' alt='logo'></img>
                        <img src='/icons/instagram.png' width='15%' alt='logo'></img>
                        <img src='/icons/tiktok12.png' width='15%' alt='logo'></img>
                        <img src='/icons/twitter.png' width='15%' alt='logo'></img>
                    </div>
                    <div className='cc'>© 2021 Gamehub Inc All Rights Reserved</div>
                    <div className='policy'><Link to='/privacy' style={{color:'inherit'}}> Terms of Service | Privacy Policy </Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
