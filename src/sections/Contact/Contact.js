import React from 'react';
import './Contact.scss';

import linkedin from './../../media/icons/linkedin.png'
import facebook from './../../media/icons/facebook.png'
import instagram from './../../media/icons/instagram.png'

export default function Contact (){
    return(
        <section className="Contact" id="contact">
            <div className="Contact_bg"></div>
            <div className="cover"></div>
            <div className="wrapper">
                <footer>
                        <small>Marc McBride Official Website&copy; {new Date().getFullYear()}</small>
                </footer>
                <div className="section__content">
                    <p>
                        Global Artists <br/>
                        <a href="http://www.globalartists.com" target="_blank" rel="noopener noreferrer">www.globalartists.com</a>
                        <br/>
                        <a href="mailto:michaelgarrett@globalartists.com?Subject=Re: Marc McBride (via website)" target="_blank" rel="noopener noreferrer">michaelgarrett@globalartists.com</a>
                        <br/>
                    </p>
                    <p>
                        Get In Touch Directly<br/>
                        <a href="mailto:mail@marcmcbride.co.uk ?Subject=Message Via Your Website" target="_blank" rel="noopener noreferrer">mail@marcmcbride.co.uk </a>

                    </p>
                    <p className="SocialMedia">
                        <img src={linkedin} alt="linkedin"/>
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="instagram"/>
                    </p>
                </div>
            </div>
        </section>
    )
};
