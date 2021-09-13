import styled from "styled-components";
import Circle from '../../assets/svg/circle.svg';
import PseudonymMask from '../../assets/svg/pseudo-mask.svg';



export const CVWrapper = styled.div`
    top: -100px;
    height: ${props => !props.open ? '0vh' : '100vh'};
    max-width: ${props => !props.open ? '0px' : '1000px'};
    width: ${props => !props.open ? '0vh' : '100%'};
    opacity: ${props => !props.open ? '0' : '1'};
    transition: ${props => !props.open ? 
        'height 1.2s 0.4s, width 1.2s 0.4s, max-width 1.2s 0.4s, opacity 0s' : 
        'height 1.2s, width 1.2s, max-width 1.2s, opacity 0.4s 1.2s'};
    overflow-y: scroll;

    #introduction {
        display: flex;
        flex-direction: column;   
        justify-content: center;
        align-items: center;

        #hi-i-am {
            z-index: 3;

            position: ${props => !props.open ? 'static' : 'absolute'};
            left: 17vw;
            top: 120px;

            font-size: ${props => props.smallScreen ? '45px' : '100px'};
            font-weight: bold;

            opacity: ${props => props.scrollTop >= 5 ? 0 : 1};
            transition: opacity 0.5s 0.1s;
        }

        #pseudonym-container {
            z-index: 3;

            position: absolute;
            left: 1.5vw;
            top: ${props => props.smallScreen ? '150px' : '200px'};

            width: ${props => !props.open ? '0vw' : props.scrollTop >= 8 ?  '0vw' : '97vw'};
            max-width: 1400px;
            aspect-ratio: 1247 / 168;
            
            -webkit-mask-image: url(${PseudonymMask});
            mask-image: url(${PseudonymMask});
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: contain;
            mask-size: contain;
            -webkit-mask-position: center;
            mask-position: center;
            backdrop-filter: brightness(140%) contrast(300%);
            
            transform: ${props => `translate(${props.scrollTop >= 5 ? 100 : 0}vw)`};   
            transition: transform 2s, width 0s ${props => props.scrollTop >= 8 ? '2s' : '0s'}; 
        }

        #profession {
            z-index: 3;

            position: ${props => !props.open ? 'static' : 'absolute'};
            left: ${props => props.scrollTop >= 5 ? '100%' : '50%'};
            top: ${props => props.scrollTop >= 5 ? '50vh': props.bottomLine+'px'};

            font-size: ${props => props.smallScreen ? props.theme.L : props.theme.XL};
            white-space: nowrap;

            background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
            padding: 1em;
            border-radius: 50px;

            transform: ${props => `
                translateX(${props.smallScreen ?  -150 : -250}px)
                translateX(${props.scrollTop >= 5 ? props.smallScreen ? -20 : -27 : -0}px)
                rotate(${props.scrollTop >= 5 ? 90 : 0}deg)
                scale(${props.scrollTop >= 5 ? 60 : 100}%)
                `};
            transition: transform 0.8s, left 1.5s, top 1.5s;
        }

        #invisible-text {
            z-index: 5;

            position: relative;

            padding-bottom: ${props => props.smallScreen ? '10%' : '20%'};
            width: ${props => !props.open ? '0vh' : '100%'};
            
            opacity: 0;
            user-select: none; /* Standard */
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            
        }
        
        .welcomeContainer {
            z-index: 5;
            position: relative;
            width: 100%;
            padding-top: ${ props => props.smallScreen ? '100px' : '200px' };
   
            display: flex;
            flex-wrap: wrap;
            justify-content: ${props => props.smallScreen ? 'center' : 'space-between'};
            align-items: center;
            
            
            img {
                margin-top: ${ props => props.smallScreen ? '30px' : '0px' };
                min-width: 320px;
                width: 36%;
                mask-image: url(${Circle});
                mask-size: contain;
                mask-position: center;
                mask-repeat: no-repeat;  
            }

            #welcome-text {
                position: relative;
                z-index: 3;
                width: ${props => props.smallScreen ? '100%' : '64%'};

                p {
                padding-left: 40px;
                }
            }
        }
    }

    .cv-topic {
        z-index: 5;
        position: relative;
        margin-right: 3em;

        h2 {
            margin-top: 30px;
            text-transform: capitalize;
        }
        

        ul {
            display: grid;
            grid-template-columns: 30% 70% ;
            grid-template-rows: auto auto auto;
            grid-template-areas: 'ts nm' 'ts pl' 'ts dc';
            grid-column-gap: 15px;
            margin-bottom: 1em;
            

            li {
                width: 100%;
                list-style: none;
            }

            .name {
                grid-area: nm;
                font-weight: bold;

            }
            .timespan {
                grid-area: ts;

                

            }
            .description {
                margin-top: 0.25em;
                grid-area: dc;
                margin-left: 1em;

            }
            .place {
                grid-area: pl;
                font-size: ${props => props.theme.S};

            }
        }
    }
`