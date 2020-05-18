import React, { useState, Fragment } from 'react';
import { PRIV_PASSWORD } from '../../api/env';

export default function PasswordForm({ showPrivate }) {
    const [link_clicked, set_link_clicked] = useState(false);
    const handleLinkClick = async () => {
        await set_link_clicked(true);
        document.getElementById('password').focus();
    };
    const validatePassword = (e) => {
        let password = e.target.value.trim();
        let match = PRIV_PASSWORD === password;
        const lock = document.querySelector('.lock');
        if (!match) {
            //kepp lock locked
            lock.classList.remove('unlocked');
            // keep private section hidden
            showPrivate(false);
            // animate lock bouncing
            lock.classList.add('anim');
            setTimeout(() => {
                lock.classList.remove('anim');
            }, 300);
        } else {
            e.target.blur();
            // unlock lock
            lock.classList.add('unlocked');
            //open private section and sroll to that part
            showPrivate(true);
            setTimeout(() => {
                const private_el = document.getElementById('playing-examples');
                private_el.scrollIntoView();
                private_el.focus();
            }, 500);
        }
    };

    const handleCloseClick = () => {
        set_link_clicked(false);
        showPrivate(false);
    };
    return (
        <Fragment>
            {!link_clicked && (
                <a
                    href='#playing-examples'
                    onClick={handleLinkClick}
                    onMouseDown={(e) => e.preventDefault()}
                    className='private-link'
                    id='playingexamples'
                >
                    Marc McBride - Playing Examples
                </a>
            )}
            {link_clicked && (
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='password'>
                        <span className='sr-only' role='alert'>
                            Enter password to unlock private section:
                        </span>
                        <span className='lock'></span>
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        onChange={validatePassword}
                        placeholder='Enter password'
                    />

                    <button
                        onClick={validatePassword}
                        onMouseDown={(e) => e.preventDefault()}
                        className='sr-only'
                    >
                        <span>Submit</span>
                    </button>
                    <button
                        onClick={handleCloseClick}
                        onMouseDown={(e) => e.preventDefault()}
                        className='private-close'
                    >
                        <span className='sr-only'> Hide form</span>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </form>
            )}
        </Fragment>
    );
}
