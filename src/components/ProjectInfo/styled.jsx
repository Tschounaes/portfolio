import styled from "styled-components";

export const ProjectInfoWrapper = styled.div`
    position: relative;
    width: 100%;

    h2 {
        width: 100px;
        flex-shrink: 0;
        }

    ul {
        margin: 0px;
    }

    article {
        padding: 6px 12px;
    }

    .project-synopsis {
        background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge66};
        padding: 6px 12px 21px 12px;
    }

    .project-credits {
        display: flex;
        background: ${props => props.theme.Skobeloff66};
        padding-top: 21px;

        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            padding-left: 0px;

            li {
                background: ${props => props.theme.Skobeloff};
                margin: 4px 8px 4px 0px;
                padding: 3px 6px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                

                span:first-child {
                    color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                    font-size: ${props => props.theme.XS};
                    margin-right: 6px;
                    
                }
                *:last-child {
                    font-weight: bold;
                    font-size: ${props => props.theme.S};
       
                }

                a {
                    font-weight: bold;
                    text-decoration: none;
                    color: ${props => props.theme.ChampagnePink};
                    transition: transform 0.4s, color 0.4s;
                }
                a:hover {
                    transform: scale(105%);
                    color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                }
            }
        }
    }

    .project-about {
        position: relative;
        display: flex;
        overflow: hidden;
        background-color: ${props => props.theme.Skobeloff66};
        mask: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 100%);
       
        // This div is a markdown-wrapper and we make the style overrides here
        div {
            max-width: 600px;
            p {
                margin-bottom: 6px;
            }
        }

        ul {
            min-width: 200px;
            display: flex;
            flex-direction: column;
            list-style: none;
            width: 100%;
            align-items: center;
            padding: 0px;

            h2 {
                width: 100%;
                text-align: center;
            }

            li {
                width: 100%;
                display: flex;
                align-items: center;

                span {
                    width: 50%;
                }
                span:first-child {
                        color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                        font-size: ${props => props.theme.S};
                        text-transform: capitalize;
                        margin-right: 8px;
                        text-align: right;
                    }
            }
        }
    }

    @media screen and (max-width: 512px) {
        h2 {
            width: 100%;
        }
        .project-credits, .project-about {
            flex-wrap: wrap;
        }

        .project-about {
            div {
                max-width: 100%;
            }
            ul {
                margin-top: 12px;
                width: 100%;
                justify-content: left;
                align-items: flex-start;
                
                h2 {
                    text-align: left;
                }
                li {
                    width: min-content;
                        span {
                            width: max-content;
                        }
                }
            }
        }

        .project-credits {
            ul {
                justify-content: center;
            }
        }

    }

    .project-about:hover {
        cursor: pointer;
        background-color: ${props => props.theme.Skobeloff};
    }

    .collapsed, .collapsed:hover {
        mask: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        overflow: scroll;
    }
`