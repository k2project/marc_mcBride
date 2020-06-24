import React from 'react';
import './Work.scss';
import cv from '../../media/Marc_McBride_Online_CV.pdf';

import attitude from '../../media/logos/attitude.png';
import bb from '../../media/logos/bb.png';
import carnival from '../../media/logos/carnival.png';
import casino from '../../media/logos/casino2.png';
import davines from '../../media/logos/davines.png';
import fairmont from '../../media/logos/fairmont.png';
import gq from '../../media/logos/gq.png';
import harpa2 from '../../media/logos/harpa2.png';
import iaea from '../../media/logos/ia.png';
import rcc from '../../media/logos/rcc2.png';
import seaborn from '../../media/logos/seaborn.png';
import savoyhotel from '../../media/logos/savoy2.png';

// TCB Group London,  ,
export default function Work() {
    const logos = [
        { name: 'Attitude Magazine ', src: attitude },
        { name: 'Celebrity Cruises International', src: rcc },

        { name: 'British GQ Magazine', src: gq },
        { name: 'Fairmont Hotel Group', src: fairmont },
        { name: 'Beyond Brodway', src: bb },
        { name: 'Seabourn', src: seaborn },
        { name: 'Davines International', src: davines },
        { name: 'Carnival Corporation & PLC', src: carnival },
        { name: 'The Savoy Hotel London', src: savoyhotel },
        { name: 'The Hippodrome Casino London', src: casino },
        { name: 'The International Atomic Energy Agency Vienna', src: iaea },
        { name: 'Harpa', src: harpa2 },
    ];
    const logosList = logos.map((logo) => (
        <li key={logo.name}>
            <img src={logo.src} alt={logo.name} />
        </li>
    ));
    return (
        <section className='Work' id='work'>
            <div className='wrapper'>
                <h2 className='section__title'>Work</h2>
                <div className='section__content'>
                    <section>
                        <h3 id='music-supervision'>Music Supervision:</h3>
                        <ul aria-labelledby='music-supervision'>
                            <li>
                                Cilla The Musical - UK Tour ( Nominated Best
                                Musical What's On Stage Awards )
                            </li>
                            <li>
                                Carrie Hope Fletcher’s Debut Album - When The
                                Curtain Falls ( Number 1 in the iTunes Download
                                Charts )
                            </li>
                            <li>
                                Vanara The Musical - Concept Album ( In
                                collaboration with Ted Sperling )
                            </li>
                            <li>
                                Dreamboats &amp; Petticoats 10th Anniversary -
                                UK Tour
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 id='music-direction'>
                            Music Direction/Conducting:
                        </h3>
                        <ul aria-labelledby='music-direction'>
                            <li>
                                We Will Rock You - Queen Theatrical Productions
                                / RCP
                            </li>
                            <li>
                                Davines World Wide Tour 2019 - The Harpa,
                                Iceland <br className='mobile' />| Orchestra:
                                Sinfonia Nord |
                            </li>

                            <li>
                                Grease The Musical - David Ian Productions / RCP
                            </li>
                            <li>Eden Espinosa - Live In London</li>
                            <li>Shoshana Bean - Live in London</li>
                            <li>Christina Bianco - UK Tour</li>
                            <li>
                                Glamis Prom - Glamis Castle{' '}
                                <br className='mobile' />| Orchestra: British
                                Sinfonietta |
                            </li>
                            {/* <li>
                                Tonight From The West End - UK Concert Tour{' '}
                                <br className='mobile' />| Orchestra: British
                                Sinfonietta |
                            </li> */}
                            <li>Best of Musical Starnights - European Tour</li>
                            <li>Vanara The Musical - Original Workshop</li>
                            {/* <li>Save The Last Dance For Me - UK Tour</li> */}
                        </ul>
                    </section>
                    <section>
                        <h3 id='corporate'>Commercial/Corporte:</h3>
                        <ul
                            aria-labelledby='corporate'
                            className='Work__corporate'
                        >
                            {logosList}
                        </ul>
                    </section>
                </div>
                <section className='Work__download'>
                    <a
                        href={cv}
                        download
                        className='btn'
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        Download PDF CV
                    </a>
                </section>
            </div>
        </section>
    );
}
