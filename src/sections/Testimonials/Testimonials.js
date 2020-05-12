import React from 'react';
import './Testimonials.scss';

function Testimonials() {
    return (
        <section className='Testimonials' id='testimonials'>
            <div className='wrapper'>
                <h2 className='section__title' id='testimonilas-list'>
                    TESTIMONIALS
                </h2>
                <div className='section__content'>
                    <ul aria-labelledby='testimonilas-list'>
                        <li className='Testimonials__card'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consequatur eligendi dicta
                                porro quas perspiciatis optio accusantium sit
                                nemo rerum. Tenetur sunt dicta eveniet
                                dignissimos laudantium consequatur facilis dolor
                                dolorum repellendus.
                            </p>
                            <span className='Testimonials__divider'></span>
                            <p className='Testimonials__name'>John Doe</p>
                            <p className='Testimonials__title'>
                                Music Producer
                            </p>
                        </li>
                        <li className='Testimonials__card'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consequatur eligendi dicta
                                porro quas perspiciatis optio accusantium sit
                                nemo rerum.
                            </p>
                            <span className='Testimonials__divider'></span>
                            <p className='Testimonials__name'>Jane Smith</p>
                            <p className='Testimonials__title'>
                                Director of FTA
                            </p>
                        </li>
                        <li className='Testimonials__card'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consequatur eligendi dicta
                                porro quas perspiciatis optio accusantium sit
                                nemo rerum. Tenetur sunt dicta eveniet
                                dignissimos laudantium consequatur facilis dolor
                                dolorum dicta eveniet dignissimos laudantium
                                consequatur facilis dolor dolorum repellendus.
                            </p>
                            <span className='Testimonials__divider'></span>
                            <p className='Testimonials__name'>
                                Liam Williams-Johnson
                            </p>
                            <p className='Testimonials__title'>
                                Performer and Actor
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
