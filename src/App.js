import React from 'react';
import './App.scss';

import Top from './sections/Top/Top';
import About from './sections/About/About';
import Media from './sections/Media/Media';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Testimonials from './sections/Testimonials/Testimonials';

// const t = new Date().getTime();
// //30 Sept
// const exp = new Date(2019, 9, 30, 0, 0, 0, 0).getTime();
// const out = exp>t? true : null;
const out = true;

export default function App() {
    return (
        <div>
            {out && (
                <div className='App Marc_McBride'>
                    <Top />
                    <About />
                    <Media />
                    <Work />
                    <Testimonials />
                    <Contact />
                </div>
            )}
        </div>
    );
}
