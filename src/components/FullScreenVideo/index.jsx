import React, { useState, useEffect, useRef } from 'react';
import useZustand from '../../store_zustand';
import useResize from '../../hooks/useResize';
import fillDisplay from '../../helpers/fillDisplay';
import { FullScreenVideoWrapper } from './styled';
import Showreel from '../../assets/video/showreel2021.mp4';

import Slideshow from '../Slideshow';

const FullScreenVideo = () => {
    const innerSize = useResize();
    const video = useRef()
    const { aboutOpen, setAboutOpen } = useZustand();
    const { setCloseAboutMe } = useZustand();
    const [ loaded, setLoaded ] = useState(false);
    const [ sliedeshowImgs, setSlideshowImgs ] = useState([]);

    const videoLoading = () => {
        setLoaded(true)
    }

    const getSlideshow = () => {
        const cache = {};
        const importAll = (r) => r.keys().forEach(key => cache[key] = r(key));
        importAll(require.context('../../assets/images/showreel_slides', false, /\.(png|jpe?g|svg)$/));
        const images = Object.entries(cache).map(module => module[1].default);

        setSlideshowImgs(images);
    }

    useEffect(() => {
        getSlideshow()
        video.current.play()
        window.scroll(0, window.innerHeight)
    },[])

    return (
        <FullScreenVideoWrapper 
            size={innerSize} 
            onClick={() => setAboutOpen(false)}
            onMouseOver={() => setCloseAboutMe(true)}
            onMouseOut={() => setCloseAboutMe(false)}
            open={aboutOpen}>
            {!loaded &&
              
            <Slideshow 
                srcs={sliedeshowImgs} 
                height={fillDisplay(innerSize, 1920/1080).height}
                speed={3250}/>
            }
             <video
                ref={video}
                onPlay={videoLoading}
                height={fillDisplay(innerSize, 1920/1080).height}
                type='video/mp4'
                src={Showreel}
                autoPlay={true}
                loop
                muted
                playsInline
            />
        </FullScreenVideoWrapper>
    )
}

export default FullScreenVideo;

