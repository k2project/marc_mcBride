import React from 'react';
import './Work.scss';
import cv from '../../media/Marc_McBride_Online_CV.pdf';

export default function Work() {
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
                        <h3 id='music-performiong'>Performing:</h3>
                        <ul aria-labelledby='music-performing'>
                            <li>
                                John Wilson Orchestra - Music of MGM - Royal
                                Albert Hall / UK Tour
                            </li>
                            <li>
                                BBC Proms 2016/2017/2018 - Royal Albert Hall
                            </li>
                            <li>
                                Music Of Danny Elfman &amp; Tim Burton - Royal
                                Albert Hall / UK Tour
                            </li>
                            <li>
                                Wicked The Musical - Apollo Victoria, West End
                            </li>
                            <li>
                                Les Miserables 20th Anniversary - Queens
                                Theatre, West End
                            </li>
                        </ul>
                    </section>
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
            </div>
        </section>
    );
}
