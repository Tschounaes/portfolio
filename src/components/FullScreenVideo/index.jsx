import React, { useState, useEffect, useRef} from 'react';
import { FullScreenVideoWrapper } from './styled';
import Iframe from 'react-iframe';


const FullScreenVideo = () => {
    const videoId = "1wXHPU65xe7gcMVmsOJ9Sjd7SSH2QqJg0"
    const url = "https://drive.google.com/uc?export=download&id="+videoId;
    const format = 1920/1080;

    const [dimensions, setDimensions] = useState([0,0])

    const adjustVideo = () => {
        const screenAspect = window.innerWidth / window.innerHeight;
        if (screenAspect > format) {
            setDimensions([window.innerWidth, window.innerWidth/format])
        } else {
            setDimensions([window.innerHeight*format, window.innerHeight])
        }
    }

    useEffect(() => {   
        adjustVideo()
        const resizeWindow = window.addEventListener('resize', () => adjustVideo());
        return () => {
            window.removeEventListener('resize', resizeWindow);
        }
    }, [])
    return (
        <FullScreenVideoWrapper>
            <video 
                height={dimensions[1]}
                src={url} 
                autoPlay
                loop
                muted
            />
        </FullScreenVideoWrapper>
    )
}

export default FullScreenVideo;

