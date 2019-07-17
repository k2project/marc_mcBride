import React from 'react';
import './App.scss';

import Top from './sections/Top/Top';
import About from './sections/About/About';
import Media from './sections/Media/Media';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';

// const t = new Date().getTime();
// //31 Aug
// const exp = new Date(2019, 7, 31, 0, 0, 0, 0).getTime();
// const out = exp>t? 1 : 0;

export default function App (){
    return(<div className="App Marc_McBride">
            <Top/>
            <About/>
            <Media/>
            <Work/>
            <Contact/>
        </div>)
};
