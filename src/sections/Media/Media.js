import React, { useState } from 'react';
import './Media.scss';
import { media } from './../../api/media';
import DisplayVideo from './DisplayVideo';

export default function Media() {
    const NUM_OF_VID_TO_DISPLAY_INIT = 9;
    const [allMedia, setAllMediaTrue] = useState(false);
    const mediaBox12 = media
        .slice(0, NUM_OF_VID_TO_DISPLAY_INIT)
        .map((video) => <DisplayVideo video={video} key={video.title} />);
    const mediaBoxRemaining = media
        .slice(NUM_OF_VID_TO_DISPLAY_INIT)
        .map((video) => <DisplayVideo video={video} key={video.title} />);
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
                {!allMedia && media.length > NUM_OF_VID_TO_DISPLAY_INIT && (
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
