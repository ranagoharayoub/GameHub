import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='contact-col'>
                <div className='title'>COMPETE COMPANY</div>
                <div className='links'>About Us</div>
                <div className='links'>Contact</div>
                <div className='links'> Terms & Conditions </div>
            </div>
            <div className='company-col'>
                <div className='title'>COMPANY</div>
                <div className='links'>Create a Ticket</div>
                <div className='links'>Contact us</div>
                <div className='links'>About us</div>
                <div className='links'>FAQ</div>
            </div>
            <div className='payment-col'>
                <img style={{marginLeft:'6px'}} src='/icons/gamehub.png' height='30px' alt='logo'></img>
                <img src='/icons/Payment_Trust_Badges.png' height='80px' alt='payment'></img>
            </div>
            <div className='social-col'>
                <div className='social-icons'>
                    <img src='/icons/facebook.png' height='28px' alt='logo'></img>
                    <img src='/icons/instagram.png' height='28px' alt='logo'></img>
                    <img src='/icons/tiktok12.png' height='28px' alt='logo'></img>
                    <img src='/icons/twitter.png' height='28px' alt='logo'></img>
                </div>
                <div className='cc'>© 2021 Gamehub Inc All Rights Reserved</div>
                <div className='policy'> Terms of Service | Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer
