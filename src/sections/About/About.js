import React from 'react';
import './About.scss';

export default function About (){
    return(
        <section className="About" id="about">
            <div className="wrapper">
                <div className="section__title">About</div>
                <div className="section__content">
                    <p>Scottish born and raised. Based between the U.K and the U.S.</p>
                    <p>Studied at The Royal Academy of Music, London. </p>
                    <p>Previously, a Bachelor of Laws (LL.B) at The University of Dundee, Scotland.</p>
                    <p>Part-time student alongside current projects, Global MBA, The University of London.</p>
                </div>
            </div>
        </section>
    )
};
