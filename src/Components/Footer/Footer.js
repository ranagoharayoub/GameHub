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
                <div></div>
            </div>
            <div className='social-col'>

            </div>
        </div>
    )
}

export default Footer
