import React from 'react';
import './About.scss';

export default function About() {
    return (
        <section className='About' id='about'>
            <div className='wrapper' id='main'>
                <h2 className='section__title'>About</h2>
                <div className='section__content'>
                    <p>
                        Scottish born and raised. Now based predominantly in the
                        U.S.
                    </p>
                    <p>Studied at The Royal Academy of Music, London. </p>
                    <p>
                        Previously, a Bachelor of Laws (LL.B) at The University
                        of Dundee, Scotland.
                    </p>
                    <p>Avid language learner. </p>
                </div>
            </div>
        </section>
    );
}
