import React, { useState } from 'react';
import './Media.scss';
import { media } from './../../api/media';
import playBtn from './../../media/icons/playBtn.png';

let videoInt = null;
let numOfMedia = 9;

export default function Media() {
    const [allMedia, setAllMediaTrue] = useState(false);
    let [tab, setTab] = useState(false);
    function handleTabClick(e, t) {
        const key = e.which || e.keyCode;
        console.log(e, t);
        setTab(t);
    }
    const mediaBox12 = media
        .slice(0, numOfMedia)
        .map((video) => displayMedia(video, tab, handleTabClick));
    const mediaBoxRemaining = media
        .slice(numOfMedia)
        .map((video) => displayMedia(video, tab, handleTabClick));
    const all = allMedia ? 'all-media' : '';

    return (
        <section className={'Media ' + all} id='media'>
            <div className='wrapper'>
                <h2 className='section__title sr-only' id='media-list'>
                    Media
                </h2>
                <div className='section__content'>
                    <ul aria-labelledby='media-list'>
                        {mediaBox12}
                        {allMedia && mediaBoxRemaining}
                    </ul>
                </div>
                {!allMedia && media.length > numOfMedia && (
                    <div className='btn__box'>
                        <button
                            className='btn'
                            onClick={() => {
                                setAllMediaTrue(true);
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            {' '}
                            More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

function displayMedia(el, tab, handleTabClick) {
    const img = el.img ? el.img : 'marc.png';
    const bg = require('./../../media/imgs/' + img);
    return (
        <li className='media' key={el.title}>
            <div
                className='media__bg cover'
                style={{ backgroundImage: 'url(' + bg + ')' }}
            ></div>
            <div className='media__text cover'>
                {el.title && (
                    <div className='media__title'>
                        <b>{el.title}</b>
                    </div>
                )}
                {el.role && <div className='media__role'>{el.role}</div>}
                {el.collaborators && (
                    <div className='media__collaborators'>
                        <small>Collaborators: {el.collaborators}</small>
                    </div>
                )}
            </div>
            <button
                className='media__play cover'
                onKeyDown={(e) => handleTabClick(e, true)}
                onClick={(e) => getVideo(e, el, tab)}
                onMouseDown={(e) => e.preventDefault()}
            >
                <img src={playBtn} alt='' />
                <span className='sr-only'>{`Play ${el.title}`}</span>
            </button>
        </li>
    );
}

function getVideo(e, el, tab) {
    const clickedEl = e.target.closest('.media__play.cover');
    // handleMouseLeave(e);
    //to stop dbl click to create 2 players
    if (!document.querySelector('.player')) {
        const player = document.createElement('div');
        const close = `<button class="close close-on-click" >
                <span class="sr-only">Close Video</span>
                <span class="close-on-click" aria-hidden="true">&times;</span>
            </button>`;

        ////DEVELOPEMENT
        // const video = '<video width="640" height="360" autoplay playsinline mute poster="./../../media/imgs/'+el.img+'"><source src="/Grease.mp4" type="video/mp4">Your browser does not support the video tag.</video>';

        ////GITHUB PAGES
        // const video = '<video width="640" height="360" autoplay playsinline mute poster="./../../media/imgs/'+el.img+'"><source src="/marc_mcBride/Grease.mp4" type="video/mp4" >Your browser does not support the video tag.</video>';
        ////WEBSITE
        const video =
            '<video width="640" height="360" autoplay playsinline mute poster="./../../media/imgs/' +
            el.img +
            '"><source src="/videos/' +
            el.video +
            '.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
        const ctrls = `<div class="player__ctrls">
                <button class="player__btn paused">
                    <span class="sr-only">Toggle play button</span>
                </button>
                <div class="player__progress" tabindex="0">
                    <span></span>
                </div>
                <div class="player_timing"></div>
            </div>`;
        const title =
            '<div class = "player__title"><p role="alert">' +
            el.title +
            '</p></div>';

        player.innerHTML = video + ctrls + title + close;
        player.className = 'player';
        document.body.append(player);

        //slide player in on play btn click
        setTimeout(() => {
            player.classList.add('shown');
            if (tab) player.querySelector('.player__btn').focus();
        }, 0);
        //no focus styling unless TAB is used
        handleMouseDown(player);
        //pausing/unpasing video
        //closing player
        handlePlayerClick(player, tab, clickedEl);
        //get video timing
        videoInt = setInterval(() => getVideoTiming(player), 100);

        const vid = player.firstElementChild;
        closeVideoOnPlayEnd(vid, tab, clickedEl);
        //set focus back to the clicked element
    } else {
        return;
    }
}
function handleMouseDown(player) {
    player
        .querySelector('.player__btn.paused')
        .addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
    player
        .querySelector('.close-on-click')
        .addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
    player
        .querySelector('.player__progress')
        .addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
}

function handlePlayerClick(player, tab, clickedEl) {
    const vid = player.firstElementChild;
    player.addEventListener('click', (e) => {
        //closing player on x click
        if (e.target.classList.contains('close-on-click')) {
            player.remove();
            clearInterval(videoInt);
            if (tab) clickedEl.focus();
        }
        //pause/unpaused video
        if (e.target.classList.contains('player__btn')) {
            e.target.classList.toggle('paused');
            if (e.target.classList.contains('paused')) {
                videoInt = setInterval(() => getVideoTiming(player), 100);
                vid.play();
            } else {
                vid.pause();
                clearInterval(videoInt);
            }
        }
        //set video duration
        if (e.target.closest('div').classList.contains('player__progress')) {
            const rect = player
                .querySelector('.player__progress')
                .getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const newCurrentTime = x * vid.duration;
            vid.currentTime = newCurrentTime.toFixed(2);
            getVideoTiming(player);
        }
    });
}
function getVideoTiming(player) {
    const vid = player.firstElementChild;
    const d = vid.duration;
    const t = vid.currentTime;
    const duration = getTimeFormated(d);
    const time = getTimeFormated(t);
    const timingEl = player.querySelector('.player_timing');
    timingEl.textContent =
        time.mins +
        ':' +
        time.secs +
        ' / ' +
        duration.mins +
        ':' +
        duration.secs;
    const progress = player.querySelector('.player__progress span');
    let w = 0;
    if (t > 0) {
        w = (100 / d) * t;
        w = w.toFixed(2);
        progress.style.width = w + '%';
    }
}
function getTimeFormated(t) {
    const mins = ~~((t % 3600) / 60);
    let secs = ~~t % 60;
    secs = ('0' + secs).slice(-2);
    return { mins, secs };
}
function closeVideoOnPlayEnd(vid, tab, clickedEl) {
    const int = setInterval(() => {
        if (vid.currentTime === vid.duration) {
            clearInterval(int);
            clearInterval(videoInt);
            setTimeout(() => {
                vid.parentElement.classList = 'player hidden';
            }, 1000);
            setTimeout(() => {
                vid.parentElement.remove();
                if (tab) clickedEl.focus();
            }, 3000);
        }
    }, 1000);
}
