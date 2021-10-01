import styled from "styled-components";

export const ProjectInfoWrapper = styled.div`
    h2 {
        width: 100px;
        flex-shrink: 0;
        }

    ul {
        margin: 0px;
    }

    article {
        margin-top: 16px;
    }

    .project-credits {
        display: flex;

        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            padding-left: 0px;

            li {
                background: ${props => props.theme.ChampagnePink66};
                margin: 4px 8px 4px 0px;
                padding: 4px 8px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                

                span:first-child {
                    color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
                    font-size: ${props => props.theme.S};
                    margin-right: 8px;
                    
                }
                span:last-child {
                    font-weight: bold;
       
                }
            }
        }
    }

    .project-about {
        display: flex;

        p {
            max-width: 600px;
        }
        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            width: 100%;
            align-items: center;

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
`