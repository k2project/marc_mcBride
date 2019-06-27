import React from 'react';
// import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Footer.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';

export default function Footer(){
    return(
        <footer>
            <div className="cover">
                <div> Marc McBride Official Website &copy;{new Date().getFullYear()}</div>
                <div>
                    {/* <NavHashLink to="/#about" >Endorsements</NavHashLink> */}
                </div>
             </div>
        </footer>
    )
}
