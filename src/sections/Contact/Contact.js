import React from 'react';
import './Contact.scss';

import linkedin from './../../media/icons/linkedin.png';
import instagram from './../../media/icons/instagram.png';

export default function Contact() {
    return (
        <section className='Contact' id='contact'>
            <div className='cover bg'></div>
            <div className='cover'></div>
            <div className='wrapper'>
                <footer>
                    <small>
                        Marc McBride Official Website&copy;{' '}
                        {new Date().getFullYear()}
                    </small>
                </footer>
                <div className='section__content'>
                    <h2 id='contact-details' className='sr-only'>
                        Contact details
                    </h2>
                    <section>
                        <h3 id='global-artists'> Global Artists</h3>

                        <ul
                            aria-labelledby='contact-details global-artists'
                            className='Contact__global-artists'
                        >
                            <li>
                                <a
                                    href='http://www.globalartists.co.uk'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    www.globalartists.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href='mailto:michaelgarrett@globalartists.co.uk?Subject=Re: Marc McBride (via website)'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    michaelgarrett@globalartists.co.uk
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 id='direct'> Get In Touch Directly</h3>

                        <ul aria-labelledby='contact-details direct'>
                            <li>
                                <a
                                    href='mailto:mail@marcmcbride.co.uk ?Subject=Message Via Your Website'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    marc@marc-mcbride.com{' '}
                                </a>
                            </li>
                            <li className='social-media'>
                                <a
                                    href='https://www.linkedin.com/in/marc-mcbride/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    <img
                                        src={linkedin}
                                        alt='Marc McBride LinkedIn account'
                                    />
                                </a>
                            </li>
                            <li className='social-media'>
                                <img src={instagram} alt='instagram' />
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}
