import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SlideshowWrapper = styled.div`
    position: relative;
    z-index: 15;
    overflow: hidden;
    width: 100vw;
    height: ${props => `${props.height}px`};
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        transition: opacity 0.4s;
    }

`

const Slideshow = ({ srcs, speed, height}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const changeSpeed = speed ? speed : 3500;

    useEffect(() => {
        const timeoutId = setTimeout(() => setCurrentIndex((currentIndex + 1) % srcs.length), changeSpeed);
        return () => clearTimeout(timeoutId);
    },[currentIndex, changeSpeed, srcs])

    
    return (
        <SlideshowWrapper height={height}> 
            {
                srcs && srcs.map((src, index) => 
                        <img 
                            style={{ 
                                position: 'absolute',
                                opacity: `${index <= currentIndex ? '1' : '0'}`,
                                height: `${height}px`
                            }}
                            src={src} 
                            key={'slide_' + index}
                            alt={src}/>
                            )
            }  
        </SlideshowWrapper>
    )
}

export default Slideshow;
