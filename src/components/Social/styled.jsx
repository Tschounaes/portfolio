import styled from "styled-components";

export const SocialContainer = styled.div`
    position: fixed;
    z-index: ${props => props.footer ? '580' : '380'};
    bottom: 2em;
    right: 3em;
    display: flex;
    justify-content: flex-end;
    transition: right 0.4s, bottom 0.4s;

    @media screen and (max-height: 320px) {
        left: 3em;
    }

    @media screen and (max-width: 1024px) {
        bottom: ${props => props.footer ? 'calc(2em + 220px)' : '2em'};

        @media screen and (max-height: 420px) {
            bottom: ${props => props.footer ? 'calc(2em + 160px)' : '2em'};
        }
    }

    @media screen and (max-width: 512px) {    
        bottom: ${props => props.footer ? 'calc(1em + 220px)' : '1em'};
        right: 1.5em;

        @media screen and (max-height: 420px) {
            bottom: ${props => props.footer ? 'calc(1em + 160px)' : '1em'};
        }


    }   

    

    .over-write-button {
        position: static;
        margin-left: 0.6em;
        transform: translateY(0px);
        background-color: ${props => props.theme.colorMedium};
        :hover {
            background-color: ${props => props.theme.colorComplement};
            transition: background-color 0.4s;
        }
    }
`