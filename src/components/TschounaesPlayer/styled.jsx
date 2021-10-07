import styled from "styled-components";

export const TschounaesPlayerWrapper = styled.div`
    --height-playbar: 6px;
    --transition-playbar: width 0.5s;
    --smooth-appear: appear 0.8s 0.2;
    
    width: 100%;
    display: flex;
    justify-content: center;

    .tschounaes-player-gui-container {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        aspect-ratio: 16 / 9;

        video {
            width: 100%;
        }

        #load-message {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            
            img {
                z-index:-1;
                position: absolute;
                width: 100%;
                filter: grayscale(100%);
            }

            div {
                height: 100%;
            }
        }

        #play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                padding: 25px;
                overflow: visible;
                border-radius: 50%;
                border: solid 2px ${props => props.theme.InternationalOrangeGoldenGateBridge};

                //use width, heigth and aspect-ratio to make it round!
                width: 10%;
                min-width: 45px;
                height: auto;
                aspect-ratio: 1 / 1;

                fill: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                background: ${props => props.theme.OuterSpaceCrayola66};
                transform: scale(1);
                transition: all 0.8s;
                cursor: pointer;

                :hover {
                    border: solid 2px rgba(0,0,0,0);
                    fill: ${props => props.theme.ChampagnePink};
                    background: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                    transform: scale(1.05);
                }
            }
        }

        .player-contols {
            opacity: ${props => props.visible ? 1 : 0};
            position: absolute;
            bottom: 12px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transition: opacity 0.8s;

            #playbar {
                position: relative;      
                display: flex;
                align-items: center;
                width: 100%;
                margin: 0px 32px;
                height: 32px;
                cursor: pointer;
                div {
                    position: absolute;
                    height: var(--height-playbar);
                }
                #playbar-bg {
                    background: ${props => props.theme.OuterSpaceCrayola66};
                    width: 100%;
                }
                #buffer {   
                    background: ${props => props.theme.OuterSpaceCrayola};
                }
                #progress {
                    background: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                }
                #jimmy {  
                    background: ${props => props.theme.Skobeloff};
                }
                #timestamp{
                    width: 80px;
                    transform: translateY(-16px) translateX(-40px);
                    font-size: 8px;
                    text-align: center;
                }
                #hover-container {
                    position: absolute;
                    width: 100%;
                    height: 32px;
                    aspect-ratio: 1 / 1;
                }
            }

            #controls {
                display: flex;
                margin-right: 32px;
                div {
                    cursor: pointer;
                    border: none;
                    color: none;
                    background-color: ${props => props.theme.Skobeloff};
                    aspect-ratio: 1 / 1;
                    height: 32px;
                    border-radius: 16px;
                    margin-right: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.4s;
                    svg {
                        fill: ${props => props.theme.ChampagnePink};
                        height: 50%;
                        width: 50%;
                    }
                    :hover {
                        background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                    }
                }
                div:last-child {
                    margin-right: 0px;
                    }
            }
        }

        @keyframes appear {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @media screen and (max-width: 600px) {
            .player-contols {
                bottom: 6px;

                #controls {
                    margin-right: 16px;
                }
            }

            #load-message {
                div {
                    height: 100%;

                    article {
                        padding: 6px;
                        min-width: 150px;
                    }

                    h1 {
                        font-size: ${props => props.theme.M};
                    }
                    p {
                        font-size: ${props => props.theme.S};
                        margin-top: 6px;
                    }
                    h2 {
                        font-size: ${props => props.theme.XS};
                        margin-bottom: 0px;
                    }
                    svg {
                        width: 20%;
                        height: 20%;
                        aspect-ratio: 1 / 1;
            }

                }

            }
        }

        @media screen and (max-height: 420px) and (min-aspect-ratio: 16/9) {
            width: auto;
            height: 100vh;
            min-height: 280px;
        }
    }

    :fullscreen {
        animation: tofullscreen 0.8s;
        video {
            width: 100%;
        }
    }

    :fullscreen::backdrop {
        background: ${props => props.theme.OuterSpaceCrayola};
    }

    @media screen and (min-aspect-ratio: 16/9) {
        :fullscreen {
            .tschounaes-player-gui-container {
                height: 100vh;
                width: min-content;
            }
        }
    }

    @media screen and (max-aspect-ratio: 16/9) {
        :fullscreen {
            .tschounaes-player-gui-container {
                height: 100%;
                width: 100vw;

                .player-contols {
                    position: relative;
                    transform: translateY(-32px);
                }
            }    
        }
    }

    @keyframes tofullscreen {
        from {
            transform: scale(0.95);
            opacity: 0;
        }
        to {
            transform: scale(1.0);
            opacity: 1;
        }
    }


`
