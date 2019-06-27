import React from 'react';
import './Media.scss';
import media from './../../media/imgs/media.png';
export default function Media (){
    return(
        <section className="Media" id="media">
            <div className="wrapper">
                <div className="section__title">Media</div>
                <div className="section__content">
                    <img src={media} alt=""/>
                </div>
            </div>
        </section>
    )
};
