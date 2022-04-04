import React, { useEffect } from 'react';
import './Top.scss';
import Nav from './../../components/Nav/Nav';

export default function Top() {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return (
        <section className='Top' id='welcome'>
            <div className='cover bg'></div>
            <div className='cover'></div>
            <Nav />
            <div className='wrapper'>
                <div className='Top__content'>
                    <h1>
                        MARC <br />
                        McBRIDE
                    </h1>
                    <h2>Music Director</h2>
                    <p>
                        Coffee lover. Dog lover. <br />
                        Health &amp; Fitness junkie. Traveller.
                    </p>
                </div>
            </div>
        </section>
    );
}
function handleScroll() {
    let topElRectTop = document
        .querySelector('.Top')
        .getBoundingClientRect().top;
    const topEl = document.querySelector('.Top__content');

    if (topElRectTop < 0) {
        const opacity = 1 + topElRectTop / 300;
        topEl.style.top = topElRectTop * -0.5 + 'px';
        topEl.style.opacity = opacity;
    } else {
        topEl.style.top = '0px';
        topEl.style.opacity = 1;
    }
}
