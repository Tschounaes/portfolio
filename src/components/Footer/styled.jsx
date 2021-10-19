import styled from "styled-components";

export const FooterWrapper = styled.footer`
    z-index: 500;
    
    position: fixed;
    width: 100%;
    overflow-y: scroll;
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
        flex-wrap: wrap;

        svg {
            padding: 12px;
            fill: ${props => props.theme.colorBright};
        }

        svg:first-child {
            height: 100px;
            width: min-content;
        }

        svg:last-child {
            height: 50px;
            width: min-content;
        }
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
`