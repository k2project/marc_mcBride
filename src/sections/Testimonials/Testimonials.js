import React from 'react';
import './Testimonials.scss';
import { testimonials } from '../../api/testimonials';

function Testimonials() {
    return (
        <section className='Testimonials' id='testimonials'>
            <div className='wrapper'>
                <h2 className='section__title' id='testimonilas-list'>
                    TESTIMONIALS
                </h2>
                <div className='section__content'>
                    <ul aria-labelledby='testimonilas-list'>
                        {testimonials.map((t) => {
                            return (
                                <li className='Testimonials__card'>
                                    <blockquote>{t.text}</blockquote>
                                    <span className='Testimonials__divider'></span>
                                    <p className='Testimonials__name'>
                                        {t.name}
                                    </p>
                                    <p className='Testimonials__title'>
                                        {t.title}
                                    </p>
                                    {t.location && (
                                        <p className='Testimonials__location'>
                                            {t.location}
                                        </p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
