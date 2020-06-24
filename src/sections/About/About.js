import React from 'react';
import './About.scss';

export default function About() {
    return (
        <section className='About' id='about'>
            <div className='wrapper' id='main'>
                <h2 className='section__title'>About</h2>
                <div className='section__content'>
                    <p>Studied at The Royal Academy of Music, London. </p>
                    <p>
                        Previously, a Bachelor of Laws (LL.B) at The University
                        of Dundee, Scotland.
                    </p>
                    <p>
                        Before becoming a full time music director, performing
                        credits included; Wicked The Musical (Apollo Victoria,
                        West End), BBC Proms 2016/17/18 (Royal Albert Hall),
                        various performances with The John Wilson Orchestra and
                        Les Misérables 20th Anniversary (Queens Theatre, West
                        End).
                    </p>
                    <p>Avid language learner. </p>
                </div>
            </div>
        </section>
    );
}
