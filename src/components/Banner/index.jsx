import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
    z-index: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    mix-blend-mode: multiply;

    div {
        transform: rotate(-7.5deg) scale(120%) translateY(-80px);
        height: 50vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        transform: rotate(7.5deg);
        width: 100vw;
        min-width: 1024px;
        aspect-ratio: 16 / 9;
        filter: brightness(180%);
        
    }

    @media screen and (max-width: 1024px) {
        * {
            transform: none !important;
        }

        div {
            height: 100vh;
        }
        @media (max-aspect-ratio: 16 / 9) {
            img {
                height: 100vh;
            }
        }
    }
`

const Banner = ({ src }) => {
    return (
        <BannerWrapper>
            <div>
                <img src={src} alt='project-banner'/>
            </div>  
        </BannerWrapper>
    )
}

export default Banner;
