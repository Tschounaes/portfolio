import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SlideshowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img{
        position: absolute;
    } 
    img.even {
        animation-name: even;
        animation-duration: 0.4s;
        animation-fill-mode: both;  
    }
    img.odd {
        animation-name: odd;
        animation-duration: 0.4s;
        animation-fill-mode: both;  
    }

    @keyframes even {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes odd {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const Slideshow = ({ srcs, speed }) => {
    const changeSpeed = speed ? Math.round(speed * 1000) : 1500;
    const [ imageIndex, setImageIndex] = useState(0);
    const [ imageSwitch, setImageSwitch] = useState(false);

    const imageOne = useRef();
    const imageTwo = useRef();


    useEffect(() => {
        const handleSizing = (ref) => {
            const aspectImg = ref.current.naturalWidth/ref.current.naturalHeight;
            const aspectWindow = window.innerWidth/window.innerHeight;
            if ( aspectImg >= aspectWindow) {
                ref.current.style.height = '100vh';
                ref.current.style.width = `${100 * aspectImg}vh`;
            } else {
                ref.current.style.width = '100vw';
                ref.current.style.height = `${100 / aspectImg}vw`;  
            }
        }

        handleSizing(imageOne)
        handleSizing(imageTwo)

        let imgTimer = window.setTimeout(() => {
            setImageIndex((imageIndex+1)%srcs.length);
            setImageSwitch(!imageSwitch);
            handleSizing(imageOne)
            handleSizing(imageTwo)
        }, changeSpeed)

        return () => {
            clearTimeout(imgTimer)
        }
    },[imageSwitch, imageIndex, changeSpeed, srcs])

    return (
        <SlideshowWrapper> 
            <img ref={ imageOne } style={{zIndex: "1"}} className={imageSwitch ? 'odd' : 'even'} src={srcs[imageIndex]} alt={'slide_' + imageIndex}/>
            <img ref={ imageTwo } style={{zIndex: "0"}} className='behind' src={srcs[imageIndex === 0 ? (srcs.length-1) : (imageIndex-1)]} alt={'slide_' + imageIndex}/>
        </SlideshowWrapper>
    )
}

export default Slideshow;
