import React, { useState } from 'react';
import './Nav.scss';

export default function Page() {
    const [mob_menu, set_mob_menu] = useState('closed');
    async function showMenu() {
        if (document.querySelector('.Nav').classList.contains('open')) {
            await set_mob_menu('closed');
        } else {
            await set_mob_menu('open');
        }
        document.querySelector('.Nav').classList.toggle('open');
        window.scrollTo(0, 0);
    }

    function closeMenu() {
        if (document.querySelector('.Nav').classList.contains('open')) {
            document.querySelector('.Nav').classList.remove('open');
            set_mob_menu('closed');
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

    return (
        <nav className='Nav'>
            <div className='wrapper'>
                <div className='Nav__brand'>Marc McBride</div>
                <button
                    className='Nav__ham'
                    onClick={showMenu}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span className='sr-only' role='alert'>
                        Mobile navigation is currently {mob_menu}.
                    </span>
                </button>
                <ul className='Nav__pages' aria-label='main navigation'>
                    <li>
                        <a
                            href='#about'
                            onClick={closeMenu}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href='#media'
                            onClick={closeMenu}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            Media
                        </a>
                    </li>
                    <li>
                        <a
                            href='#work'
                            onClick={closeMenu}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            Work
                        </a>
                    </li>
                    <li>
                        <a
                            href='#testimonials'
                            onClick={closeMenu}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href='#contact'
                            onClick={handleContactClick}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
