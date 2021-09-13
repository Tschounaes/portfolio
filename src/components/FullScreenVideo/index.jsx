import React from 'react';
import useResize from '../../hooks/useResize';
import fillDisplay from '../../helpers/fillDisplay';
import { FullScreenVideoWrapper } from './styled';
import Showreel from '../../assets/video/showreel2021.mp4';

const FullScreenVideo = () => {
    const innerSize = useResize();

    return (
        <FullScreenVideoWrapper size={innerSize}>
            <video 
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

