import React, { useState, useEffect } from 'react';
import { FullScreenVideoWrapper } from './styled';
import Showreel from '../../assets/video/showreel2021.mp4'



const FullScreenVideo = () => {
    
    const [dimensions, setDimensions] = useState([0,0])

    useEffect(() => {
        const format = 1920/1080;
        const adjustVideo = () => {
            const screenAspect = window.innerWidth / window.innerHeight;
            if (screenAspect > format) {
                setDimensions([window.innerWidth, window.innerWidth/format])
            } else {
                setDimensions([window.innerHeight*format, window.innerHeight])
            }
        }

        adjustVideo()
        window.addEventListener('resize', adjustVideo);
        return () => {
            window.removeEventListener('resize', adjustVideo);
        }
    }, [])
    return (
        <FullScreenVideoWrapper>
            <video 
                height={dimensions[1]}
                src={Showreel} 
                autoPlay
                loop
                muted
            />
        </FullScreenVideoWrapper>
    )
}

export default FullScreenVideo;

