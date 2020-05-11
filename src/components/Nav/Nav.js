import React, { useEffect } from 'react';
import './Nav.scss';

export default function Page(props) {
    useEffect(() => {
        window.addEventListener('scroll', handleNavOnScroll);
        window.addEventListener('load', handleNavOnScroll);
        return () => {
            window.removeEventListener('scroll', handleNavOnScroll);
            window.removeEventListener('load', handleNavOnScroll);
        };
    });
    return (
        <div className='Nav'>
            <div className='wrapper'>
                <a href='#welcome'>
                    <div className='Nav__brand'>Marc McBride</div>
                </a>
                <div className='Nav__ham' onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='Nav__pages'>
                    <a href='#about' onClick={closeMenu}>
                        About
                    </a>
                    <a href='#media' onClick={closeMenu}>
                        Media
                    </a>
                    <a href='#work' onClick={closeMenu}>
                        Work
                    </a>
                    <a href='#testimonials' onClick={closeMenu}>
                        Testimonials
                    </a>
                    <a href='#contact' onClick={handleContactClick}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
function handleNavOnScroll() {
    const theme_color = 'crimson';
    const color_dark = '#515769';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.Nav__pages a');
    //const html = document.documentElement;
    // const offset = html.scrollTop + window.innerHeight;
    //const height = html.offsetHeight;
    const topElRectTop = document.querySelector('.Top').getBoundingClientRect()
        .top;
    const aboutElRectTop = document
        .querySelector('.About')
        .getBoundingClientRect().top;
    const navEl = document.querySelector('.Nav');
    const menu = document.querySelectorAll('.Nav__ham span');
    const workElRectBottom = document
        .querySelector('.Work')
        .getBoundingClientRect().bottom;

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        //app scrolled to top
        if (topElRectTop > -100) {
            navLinks.forEach((a) => {
                a.style.color = '#fff';
            });
            navEl.style.background = 'none';
            navEl.style.border = 'none';
            navEl.firstElementChild.style.color = '#fff';
            menu.forEach((span) => (span.style.background = '#fff'));
        } else {
            navEl.style.background = '#fff';
            navEl.style.border = 'solid .2rem #fafafa';
            navEl.firstElementChild.style.color = color_dark;
            menu.forEach((span) => (span.style.background = color_dark));
        }
        // over top section
        if (topElRectTop < -150 && aboutElRectTop > 250) {
            navLinks.forEach((a) => {
                a.style.color = color_dark;
            });
        }
        //getting active link class on scroll to section
        if (top < 50 && top > -50) {
            const id = section.getAttribute('id');
            if (id) {
                //nav section has no id
                navLinks.forEach((a) => {
                    if (a.textContent.toLowerCase() === id.toLowerCase()) {
                        a.style.color = theme_color;
                    } else {
                        a.style.color = color_dark;
                    }
                });
            }
        }
        //app scrolled to bottom
        if (workElRectBottom - window.innerHeight < 0) {
            navLinks.forEach((a, i, arr) => {
                a.style.color = color_dark;
                arr[arr.length - 1].style.color = theme_color;
            });
        }
    });
}
function showMenu() {
    document.querySelector('.Nav').classList.toggle('open');
}

function closeMenu() {
    if (document.querySelector('.Nav').classList.contains('open')) {
        document.querySelector('.Nav').classList.remove('open');
    }
}

function handleContactClick() {
    showMenu();
    const pArr = document.querySelectorAll('.Contact .section__content p');
    pArr.forEach((p, index) => {
        p.style.opacity = 0;
        p.style.left = '-2rem';
        p.style.transition = 'none ';
        setTimeout(() => {
            p.style.opacity = 1;
            p.style.left = 0;
            p.style.transition = '.5s ease-out';
        }, index * 500 + 1000);
    });
}
