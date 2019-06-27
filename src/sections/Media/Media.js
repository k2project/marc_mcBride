import React, {useEffect} from 'react';
import './Media.scss';
import {media} from './../../api/media';
import playBtn from './../../media/icons/playBtn.png';
export default function Media (){
    const mediaBox = media.map(video=>displayMedia(video))
    return(
        <section className="Media" id="media">
            <div className="wrapper">
                <div className="section__title">Media</div>
                <div className="section__content">
                    {/* <iframe src="https://player.vimeo.com/video/243244233" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen onClick={e=>console.log(e)}></iframe>
                    <iframe src="https://player.vimeo.com/video/243244233" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    <iframe src="https://player.vimeo.com/video/243244233" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    <iframe src="https://player.vimeo.com/video/243244233" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    <iframe src="https://player.vimeo.com/video/243244233" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
                    {mediaBox}
                </div>

            </div>
        </section>
    )
};
function displayMedia(el){
    const img = el.img? el.img :'marc.png'
    const bg = require('./../../media/imgs/'+img);
    return (
        <div className="media" key={el.title} >
            <div className="cover media__bg" style={{backgroundImage:"url("+bg+")"}} ></div>
            <div className="cover media__text">
                <b>{el.title}</b>
                <br/>
                {el.role}
                {el.collaborators && <small>Collaborators: {el.collaborators}</small>}
            </div>
            <div className="cover media__play">
                <img src={playBtn} alt="play"/>
            </div>
        </div>
    )
}
