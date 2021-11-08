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
        -webkit-transform: rotate(-7.5deg) scale(120%) translateY(-80px);
        -moz-transform: rotate(-7.5deg) scale(120%) translateY(-80px);
        -o-transform: rotate(-7.5deg) scale(120%) translateY(-80px);
        -ms-transform: rotate(-7.5deg) scale(120%) translateY(-80px);

        translate: 0px -80px;
        rotate: -7.5deg;
        scale: 1.2;

        @media screen {
                @supports (-moz-transform: rotate(-7.5deg) scale(120%) translateY(-80px)) {
                    rotate: none;
                    scale: none;
                }
            }

        height: 50vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100vw;
        transform: rotate(7.5deg);
        aspect-ratio: 16 / 9;
        filter: brightness(180%);
        -webkit-filter: brightness(180%);
        
    }

    @media screen and (max-width: 1024px) {
        * {
            transform: none !important;
            translate: none !important;
            rotate: none !important;
            scale: none !important;
        }

        div {
            height: 100vh;
        }

        img {
            height: 100vh;
            width: auto; 
        }


        @media (max-aspect-ratio: 16 / 9) {
            img {
                height: 100vh;
            }
        }
    }
`

export default BannerWrapper;