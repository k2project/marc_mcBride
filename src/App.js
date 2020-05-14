import React, { useState, Fragment } from 'react';
import './App.scss';

import Top from './sections/Top/Top';
import About from './sections/About/About';
import Media from './sections/Media/Media';
import Work from './sections/Work/Work';
import PrivateWork from './sections/PrivateWork/PrivateWork';
import Contact from './sections/Contact/Contact';
import Testimonials from './sections/Testimonials/Testimonials';
import SkipToMainLink from './components/SkipToMainLink';

export default function App() {
    const [private_section, set_private_section] = useState(false);
    return (
        <Fragment>
            <SkipToMainLink />
            <div className='App Marc_McBride'>
                <Top />
                <About />
                <Media />
                <Work />
                {private_section && <PrivateWork />}
                <Testimonials />
                <Contact showPrivate={set_private_section} />
            </div>
        </Fragment>
    );
}
