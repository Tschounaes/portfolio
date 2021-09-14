import React, { useState, useEffect } from 'react';
import useZustand from '../../store_zustand';
import useResize from '../../hooks/useResize';
import fillDisplay from '../../helpers/fillDisplay';
import { FullScreenVideoWrapper } from './styled';
import Showreel from '../../assets/video/showreel2021.mp4';

const FullScreenVideo = () => {
    const innerSize = useResize();
    const { aboutOpen, setAboutOpen } = useZustand();
    const { setCloseAboutMe } = useZustand();
    const [loaded, setLoaded] = useState(false);
    const [dots, setDots] = useState(0)

    const videoLoading = () => {
        setLoaded(true)
    }

    useEffect(() => {
        let dotTimer = window.setTimeout(() => {
            setDots((dots+1)%3);
        }, 500)

        return () => {
            clearTimeout(dotTimer)
        }
    },[dots])

    return (
        <FullScreenVideoWrapper 
            size={innerSize} 
            onClick={() => setAboutOpen(false)}
            onMouseOver={() => setCloseAboutMe(true)}
            onMouseOut={() => setCloseAboutMe(false)}
            open={aboutOpen}>
            {!loaded &&
            <h1>{'Loading' + (dots === 0 ? '.' : dots === 1 ? '..' : '...')}</h1>
            }
            <video
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

