import React from 'react';
import './App.scss';

import Top from './sections/Top/Top';
import About from './sections/About/About';
import Media from './sections/Media/Media';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';


export default function App (){
    return(
        <div className="App Marc_McBride">
            <Top/>
            <About/>
            <Media/>
            <Work/>
            <Contact/>
        </div>
    )
};
