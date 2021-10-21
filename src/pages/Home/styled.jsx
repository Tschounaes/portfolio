import styled from "styled-components";

const HomeWrapper = styled.main`
    overflow: hidden;

    .appear {
        animation-name: appear;
        animation-duration: 0.4s;
    }

    .disappear {
        animation-name: disappear;
        animation-duration: 0.4s;
    }

    .suggestion {
        position: absolute;
        z-index: 50;
        left: 15%;
        bottom: 50%;
        display: flex;
        align-items: center;
        height: min-content;
        max-width: 60%;
        min-width: calc(240px - 24px);
      
        cursor: pointer;
        background-color: ${props => props.theme.colorMedium};
        -webkit-box-shadow: 0px 0px 40px 10px rgba(0,0,0,0.5);
        box-shadow:  0px 0px 40px 10px rgba(0,0,0,0.5);
        border-radius: calc(25px + 12px);
        padding: 12px;
        transition: background-color 0.4s;

        * {
            padding: 0px 12px;
        }

        svg {
            fill: ${props => props.theme.colorBright};
            height: 50px;
            width: auto;
            
            overflow: visible;
        }

        p {
            width: 200px;
        }
    
        :hover {
            background-color: ${props => props.theme.colorComplement};
        }

        @keyframes appear {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes disappear {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    }
`

export default HomeWrapper;