import styled from "styled-components";

export const FooterWrapper = styled.footer`
    z-index: 500;
    
    position: fixed;
    width: 100%;
    height: 220px;
    overflow-y: scroll;
    overflow-x: hidden;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colorComplement66};

    animation-name: ${props => props.open ? 'open' : 'close'};
    animation-duration: 0.8s;

    .brand {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        svg {
            padding: 12px;
            fill: ${props => props.theme.colorBright};
        }

        svg:first-child {
            height: 100px;
            width: 100px;
        }

        svg:last-child {
            height: 50px;
            width: min-content;
        }
    }

    p {
        text-align: center;
        text-justify: center;
        -ms-text-justify: center;
    }

    .dev-note {
            margin-bottom: 2em;
            margin-top: 0.5em;

            a {
                color: ${props => props.theme.colorMedium};
            }
        }

    @keyframes open {
        from {
            height: 0px;
        }
        to {
            height: 220px;
        }
    }

    @keyframes close {
        from {
            height: 220px;
        }
        to {
            height: 0px;
        }
    }

    @media screen and (max-width: 550px) {
        p{
            transform: translateY(-12px);
        }
        .brand {
            svg {
                padding: 6px;
            }
            svg:last-child {
                height: 30px;
            }
        }
    }

    @media screen and (max-height: 420px) {
        height: 160px;
        p{
            transform: translateY(-8px);
        }
        .brand {
            svg:first-child {
                height: 62px;
                width: 62px;  
            }
        }
        
        @keyframes open {
            from {
                height: 0px;
            }
            to {
                height: 160px;
            }
        }

        @keyframes close {
            from {
                height: 160px;
            }
            to {
                height: 0px;
            }
        }
    }
`