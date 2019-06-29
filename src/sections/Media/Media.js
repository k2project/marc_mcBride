import React, {useEffect} from 'react';
import './Media.scss';
import {media} from './../../api/media';
import playBtn from './../../media/icons/playBtn.png';

let videoInt = null;
export default function Media (){
    const mediaBox = media.map(video=>displayMedia(video))
    return(
        <section className="Media" id="media">
            <div className="wrapper">
                <div className="section__title">Media</div>
                <div className="section__content">

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
                <img src={playBtn} onClick={()=>getVideo(el)} alt="play"/>
            </div>
        </div>
    )
}
function getVideo(el){
    //to stop dbl click to create 2 players
    if(!document.querySelector('.player')){
        const player = document.createElement('div');
        const close = '<div class="close">&times;</div>';
        const video = '<video width="640" height="360" autoplay><source src="./videos/'+el.video+'.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
        const ctrls = '<div class="player__ctrls"><div class="player__btn paused"></div><div class="player__progress"><span></span></div><div class="player_timing"></div></div>';
        const title = '<p>'+el.title+'</p>';

        player.innerHTML=video+ctrls+title+close;
        player.className = 'player';
        document.body.append(player);

        //slide player in on play btn click
        setTimeout(()=>{
            player.classList.add('shown');
        },0)
        //pausing/unpasing video
        //closing player
        handlePlayerClick(player);
        //get video timing
        videoInt = setInterval(()=>getVideoTiming(player),100)

        const vid = player.firstElementChild;
        closeVideoOnPlayEnd(vid);
    }else{
        return;
    }

}

function handlePlayerClick(player){
    const vid = player.firstElementChild;
    player.addEventListener('click',e=>{
        //closing player on x click
        if(e.target.classList.contains('close')){
            player.remove();
            clearInterval(videoInt);
        }
        //pause/unpaused video
        if(e.target.classList.contains('player__btn')){
            e.target.classList.toggle('paused');
            if(e.target.classList.contains('paused')){
                videoInt = setInterval(()=>getVideoTiming(player),100)
                vid.play();
            }else{
                vid.pause();
                clearInterval(videoInt)
            }
        }
        //set video duration
        if(e.target.closest('div').classList.contains('player__progress')){
            const rect = player.querySelector('.player__progress').getBoundingClientRect();
            const x = (e.clientX - rect.left)/rect.width;
            const newCurrentTime = x * vid.duration;
            vid.currentTime = newCurrentTime.toFixed(2);
        }
    })
}
function getVideoTiming(player){
    const vid = player.firstElementChild;
    const d = vid.duration;
    const t = vid.currentTime;
    const duration = getTimeFormated(d);
    const time = getTimeFormated(t);
    const timingEl = player.querySelector('.player_timing');
    timingEl.textContent = time.mins+':'+time.secs+' / '+duration.mins+':'+duration.secs;
    const progress = player.querySelector('.player__progress span');
    let w = 0;
    if(t>0){
        w = (100 / d) * t;
        w = w.toFixed(2);
        progress.style.width = w+'%';
    }

}
function getTimeFormated(t){
    const mins = ~~((t % 3600) / 60);
    let secs =~~t % 60;
    secs = ("0" + secs).slice(-2);
    return {mins,secs}
}
function closeVideoOnPlayEnd(vid){
    const int = setInterval(()=>{
        if(vid.currentTime === vid.duration){
            clearInterval(int)
            clearInterval(videoInt);
            setTimeout(()=>{
                vid.parentElement.classList='player hidden';
            },1000)
            setTimeout(()=>{
                vid.parentElement.remove();
            },3000)
        }
    },1000)
}
