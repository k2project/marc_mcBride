import React, { useState, useEffect } from 'react';
import './Media.scss';
import playBtn from './../../media/icons/playBtn.png';

export default function DisplayVideo({ video }) {
    let videoInterval = null;
    let [tab, setTab] = useState(false);
    // useEffect(() => {
    //     Array.from(document.querySelectorAll('.media__play.cover')).forEach(
    //         (btn) => {
    //             if (!tab) btn.blur();
    //         }
    //     );
    // }, []);
    const img = video.img ? video.img : 'marc.png';
    const bg = require('./../../media/imgs/' + img);

    function getVideo(e, el, tab, setTab) {
        const clickedEl = e.target.closest('.media__play.cover');
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
                    <button class="player__btn paused" title="Play and pause the video"></button>
                    <div class="player__progress" tabindex="0" title="Video play time. Use left and right arrows to backward or forward the video">
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
            player.setAttribute('tabindex', '0');
            document.body.append(player);

            //slide player in on play btn click
            setTimeout(() => {
                player.classList.add('shown');
                //set focus on ctrls for keyboard use
                player.focus();
                if (tab) player.querySelector('.player__btn').focus();
            }, 0);

            //no focus styling unless TAB is used
            handleMouseDown(player);
            //pausing/unpasing video /closing player on click
            handlePlayerClick(player, tab, setTab, clickedEl);

            //pausing/unpasing video /closing player with keyboard
            handlePlayerKeyDown(player);

            //get video timing
            videoInterval = setInterval(() => getVideoTiming(player), 100);
            //on video end
            const vid = player.firstElementChild;
            closeVideoOnPlayEnd(vid, tab, clickedEl);
        } else {
            return;
        }
    }
    function handleMouseDown(player) {
        const blurEl = (e) => {
            e.preventDefault();
            e.target.blur();
        };
        player
            .querySelector('.player__btn.paused')
            .addEventListener('mousedown', (e) => {
                blurEl(e);
            });
        player
            .querySelector('.close-on-click')
            .addEventListener('mousedown', (e) => {
                blurEl(e);
            });
        player
            .querySelector('.player__progress')
            .addEventListener('mousedown', (e) => {
                blurEl(e);
            });
    }

    function handlePlayerClick(player, tab, setTab, clickedEl) {
        const vid = player.firstElementChild;
        player.addEventListener('click', (e) => {
            setTab(false);
            //closing player on x click
            if (e.target.classList.contains('close-on-click')) {
                player.remove();
                clearInterval(videoInterval);
                if (tab) clickedEl.focus();
            }
            //pause/unpaused video
            if (e.target.classList.contains('player__btn')) {
                togglePlay(player, e.target);
            }
            //set video duration
            if (
                e.target.closest('div').classList.contains('player__progress')
            ) {
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
    function handlePlayerKeyDown(player) {
        const vid = player.firstElementChild;
        player.addEventListener('keydown', (e) => {
            const key = e.which || e.keyCode;
            const play_btn = document.querySelector('.player__btn');
            switch (e.keyCode) {
                //pause/unpaused video on SPACE click
                case 32:
                    e.preventDefault();
                    togglePlay(player, play_btn);
                    break;
                //forward video 10s on right arrow press
                case 39:
                    vid.currentTime += 10;
                    getVideoTiming(player);
                    break;
                //backward video 10s on left arrow press
                case 37:
                    vid.currentTime -= 10;
                    getVideoTiming(player);
                    break;
            }
        });
    }
    function togglePlay(player, targetEl) {
        const vid = player.firstElementChild;
        targetEl.classList.toggle('paused');
        if (targetEl.classList.contains('paused')) {
            videoInterval = setInterval(() => getVideoTiming(player), 100);
            vid.play();
        } else {
            vid.pause();
            clearInterval(videoInterval);
        }
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
                clearInterval(videoInterval);
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

    return (
        <li className='media' key={video.title}>
            <div
                className='media__bg cover'
                style={{ backgroundImage: 'url(' + bg + ')' }}
            ></div>
            <div className='media__text cover'>
                {video.title && (
                    <div className='media__title'>
                        <b>{video.title}</b>
                    </div>
                )}
                {video.role && <div className='media__role'>{video.role}</div>}
                {video.collaborators && (
                    <div className='media__collaborators'>
                        <small>Collaborators: {video.collaborators}</small>
                    </div>
                )}
            </div>
            <button
                className='media__play cover'
                onKeyDown={(e) => setTab(true)}
                onClick={(e) => getVideo(e, video, tab, setTab)}
                onMouseDown={(e) => e.preventDefault()}
            >
                <img src={playBtn} alt='' />
                <span className='sr-only'>{`Play ${video.title}`}</span>
            </button>
        </li>
    );
}
