import styled from "styled-components";

export const AboutMeOverlayWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: ${props => !props.open ? '1.2em' : '0em'}; 
    left: ${props => !props.open ? '1.5em' : '0em'};
    background-color: ${props => !props.open ? props.theme.Transparent : props.theme.Skobeloff66};
    border-radius: ${props => !props.open ? '75px' : '0px'};
    padding: ${props => !props.open ? '15px' : '0px'};
    cursor: ${props => !props.open ? 'pointer' : 'default'} ;
    z-index: 3;
    -webkit-box-shadow: ${props => props.open ? 
        '0px 0px 40px 20px rgba(0,0,0,0.5)' :
        '0px 0px 0px 0px rgba(0,0,0,0)' }; 
    box-shadow:  ${props => props.open ? 
        '0px 0px 40px 20px rgba(0,0,0,0.5)' :
        '0px 0px 0px 0px rgba(0,0,0,0)' };
    transition: ${props => !props.open ? 'all 0.4s 0.2s' : 'all 1.2s'} ;

    .close-button {
        position: absolute;

        right: 3em;
        top: 2em;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => 
            !props.open ? 
            props.theme.Transparent : 
            props.toggleClose ? 
            props.theme.InternationalOrangeGoldenGateBridge : 
            props.theme.Skobeloff};
        border-radius: 15px;
        padding: 0px 6px;  
        cursor: pointer;
        opacity: 0;

        animation-name: delay-appear;
        animation-duration: 1s;
        animation-delay: 1.6s;
        animation-fill-mode: forwards;

        transition: background-color 0.4s;

        .cross-container {
            height: 60%;
            aspect-ratio: 1 / 1;
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.ChampagnePink};
            mask: url(${props => props.crossIcon});
            mask-repeat: no-repeat;
            mask-size: contain;
            mask-position: center;
        }

        p {
            font-size: ${props => props.theme.S};
            white-space: nowrap;
            width: ${props => 
                !props.toggleClose ? '0px' : '90px' };
            overflow: hidden;

            transition: width 0.4s;
        }

        :hover {
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.InternationalOrangeGoldenGateBridge};

            p {
                width: 90px;
            }
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

    #about-me-title { 
        height: 0px;
        width: 100%;
        margin-top: ${props => !props.open ? '6px' : '0px'};
        margin-bottom: ${props => !props.open ? '6px' : '0px'};
        font-size: ${props => props.theme.S};
        text-align: center;
        text-transform: capitalize;
        opacity: 0;
        user-select: none; /* Standard */
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        transition: height 0.4s 0.2s, opacity 0.4s 0.2s, margin 0.4s 0.2s;
    }
    #logo-container {
        background-color: ${props => !props.open ? props.theme.Transparent : props.theme.OuterSpaceCrayola66};
        width: 100%;
        display: flex;
        justify-content: center;

        animation-name: ${props => !props.open ? 'none' : 'anim'};
        animation-duration: 0.4s;
        animation-delay: 1.2s;
        animation-fill-mode: backwards;

        transition: background-color 0.4s;

        @keyframes anim {
            from {
                background-color: ${props => props.theme.Transparent}
            }
            to {
                background-color: ${props => props.theme.OuterSpaceCrayola66}
            }
        }

        svg { 
            fill: ${props => !props.open ? props.theme.InternationalOrangeGoldenGateBridge : props.theme.ChampagnePink};
            padding-top: ${props => !props.open ? '0px' : '30px'};
            padding-bottom: ${props => !props.open ? '0px' : '30px'};
            height: 100px;
            transition: fill 0.4s 0.2s, padding-top 1.2s;
        }
    }

    @media screen and (max-height: 420px) {
        #logo-container{
            svg {
                height: 62px;
                padding-top: ${props => !props.open ? '0px' : '15px'};
                padding-bottom: ${props => !props.open ? '0px' : '15px'};
                }
        }
    }

    :hover {
        background-color: ${props => !props.open ? props.theme.InternationalOrangeGoldenGateBridge : props.theme.Skobeloff};
        #logo-container {
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.OuterSpaceCrayola};
            svg {
                fill: ${props => props.theme.ChampagnePink};
            }
        }

        
        .cv-footer {
            background-color: ${props => !props.open ? props.theme.Transparent : props.theme.OuterSpaceCrayola};
        }
        #about-me-title {
            height: ${props => !props.open ? '12px' : '0px'};
            margin-top: ${props => !props.open ? '6px' : '0px'};
            margin-bottom: ${props => !props.open ? '6px' : '0px'};
            opacity: ${props => !props.open ? '1' : '0'};
        }
    }

    
    
`