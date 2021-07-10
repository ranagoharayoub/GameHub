import React from 'react'
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';
function GoogleRecaptcha() {
    const YourReCaptchaComponent  = () => {
        const { executeRecaptcha } = useGoogleReCaptcha();
        const token = executeRecaptcha("signup");
      
        return (token)
      }
    return (
        <div>
            <GoogleReCaptchaProvider reCaptchaKey="6LcA94cbAAAAAD6zwaoTbI3BKnEzaMDc_Pk_JpC5">
                <YourReCaptchaComponent />
            </GoogleReCaptchaProvider>,
        </div>
    )
}

export default GoogleRecaptcha
