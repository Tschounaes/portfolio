import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const getStyle = (width, len) => {
    const ratio = width / len;
    if (ratio > 120) {
        return '150px';
    } else if (ratio > 95) {
        return '100px';
    } else if (ratio > 70) {
        return '72px';
    } else if (ratio > 45) {
        return '54px';
    } else {
        return '32px';
    }
}

const StretchWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    .mockup-title {
        opacity: 0;
        height: 0px;
        width: 0px;
        overflow: hidden;
        user-select: none;
    }
    .project-title {
        font-size : ${props => getStyle(props.width, props.len)};
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        text-transform: uppercase;
        transition: font-size 0.4s;
        div {
            transition: margin 0.4s;
        }
    }

    @media screen and (max-width: 1024px) {
        .project-title {
            div:first-child{
                margin-left: 12px;
            }
            div:last-child{
                margin-right: 12px;
            }
        }
        
    }
`


const StretchTitle = ({ title, maxWidth}) => {
    const titleElem = useRef();
    const [width, setWidth] = useState(window.innerWidth > maxWidth ? maxWidth : window.innerWidth)

    const getWidth = () => titleElem.current.getBoundingClientRect().width; 

    useEffect(() => {
        // set width state to determin font-size css arribute
        
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        }
        window.addEventListener('resize', resizeListener)
        return () => window.removeEventListener('resize', resizeListener);
    }, [title]);

    

    return (
        <StretchWrapper 
            width={width}
            len={title.split('').length}
            ref={titleElem}>
            <h1 className='mockup-title'>{title}</h1>
            <div className='project-title' >
            {   
                title.split('').map((letter, index) => {
                    return  <div key={index + '_title'}>{letter}</div>
                })
            }
            </div>
        </StretchWrapper>
    )
}

export default StretchTitle;
