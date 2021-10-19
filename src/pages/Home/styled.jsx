import styled from "styled-components";

const HomeWrapper = styled.main`

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
        left: 20%;
        top: 20%;
        display: flex;
        align-items: center;
        height: min-content;
        cursor: pointer;
        background-color: ${props => props.theme.colorMedium};
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