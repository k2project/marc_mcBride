import React from 'react';
import './Contact.scss';
import PasswordForm from './PasswordForm';

import linkedin from './../../media/icons/linkedin.png';
import instagram from './../../media/icons/instagram.png';

export default function Contact({ showPrivate }) {
    return (
        <section className='Contact' id='contact'>
            {/* <div className='mb-bg'></div> */}
            <div className='cover'></div>
            <div className='wrapper'>
                <footer>
                    <PasswordForm showPrivate={showPrivate} />
                    <small>
                        Marc McBride Official Website &copy;
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
                                    www.globalartists.co.uk
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
                                <a
                                    href='https://www.instagram.com/marc_mcbride/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    <img
                                        src={instagram}
                                        alt='Marc McBride instagram account'
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}
