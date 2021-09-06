import styled from "styled-components";

export const AboutMeOverlayWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: ${props => !props.open ? '1.2em' : '0em'}; 
    left: ${props => !props.open ? '1.5em' : '0em'};
    background-color: ${props => !props.open ? props.theme.Transparent : props.theme.Skobeloff66};
    border-radius: ${props => !props.open ? '75px' : '0px'};
    padding: 15px;
    cursor: ${props => !props.open ? 'pointer' : 'default'} ;
    z-index: 1;
    transition: ${props => !props.open ? 'all 0.4s 0.2s' : 'all 1.2s'} ;

    .about-me-content {
        height: ${props => !props.open ? '0vh' : '100vh'};
        width: ${props => !props.open ? '0vh' : '62vw'};
        min-width: ${props => !props.open ? '0vh' : '400px'};
        transition: all 1.2s;
    }

    .close-button {
        height: 30px;
        aspect-ratio: 1 / 1;
        background-color: ${props => !props.open ? props.theme.Transparent : props.theme.OuterSpaceCrayola};
        position: absolute;
        right: 2em;
        top: 2em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        animation-name: delay-appear;
        animation-duration: 1s;
        animation-delay: 1.4s;
        animation-fill-mode: forwards;

        :hover {
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.InternationalOrangeGoldenGateBridge};
        }

        transition: background-color 0.4s;

        .cross-container {
            width: 60%;
            height: 60%;
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.ChampagnePink};
            mask-image: url(${props => props.crossIcon});
            mask-repeat: no-repeat;
            mask-size: contain;
            mask-position: center;    
        }

        @keyframes delay-appear {
            from {
                opacity: 0;
            }
            to  {
                opacity: 1;
            }
        }
    }

    p { 
        height: 0px;
        width: 100%;
        margin-top: 6px;
        margin-bottom: 6px;
        font-size: ${props => props.theme.S};
        text-align: center;
        text-transform: capitalize;
        opacity: 0;
        transition: height 0.4s 0.2s, opacity 0.4s 0.2s, margin 0.4s 0.2s;
    }
 
    svg {
        fill: ${props => !props.open ? props.theme.InternationalOrangeGoldenGateBridge : props.theme.ChampagnePink};
        height: 100px;
        width: 100px;
        transition: fill 0.4s 0.2s;
    }

    :hover {
        background-color: ${props => !props.open ? props.theme.InternationalOrangeGoldenGateBridge : props.theme.Skobeloff};

        svg {
            fill: ${props => props.theme.ChampagnePink};
        }

        p {
            height: 12px;
            margin-top: 6px;
            margin-bottom: 6px;
            opacity: ${props => !props.open ? '1' : '0'};
        }
    }
`