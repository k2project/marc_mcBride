import React, { Fragment } from 'react';
import './App.scss';

import Top from './sections/Top/Top';
import About from './sections/About/About';
import Media from './sections/Media/Media';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Testimonials from './sections/Testimonials/Testimonials';
import SkipToMainLink from './components/SkipToMainLink';

export default function App() {
    return (
        <Fragment>
            <SkipToMainLink />
            <div className='App Marc_McBride'>
                <Top />
                <About />
                <Media />
                <Work />
                <Testimonials />
                <Contact />
            </div>
        </Fragment>
    );
}
