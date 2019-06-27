import React  from 'react';

import facebook from './../media/icons/facebook.png';
import twitter from './../media/icons/twitter.png';
import instagram from './../media/icons/instagram.png';
import linkedin from './../media/icons/linkedin.png';

export default function SocialMedia (){
    return(
        <div className="SocialMedia">
            <a href="https://www.linkedin.com/in/murray-grant-3066b34a/" target="_blank"  rel="noopener noreferrer">
                <img src={linkedin} alt="Linked In"/>
            </a>
            <a href="https://www.facebook.com/murray.grantmga" target="_blank"  rel="noopener noreferrer">
                <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://www.twitter.com/murraygrant85" target="_blank"  rel="noopener noreferrer">
                <img src={twitter} alt="Twitter"/>
            </a>
            <a href="https://www.instagram.com/murraygrant/" target="_blank"  rel="noopener noreferrer">
                <img src={instagram} alt="Instagram"/>
            </a>
        </div>
    )
}
