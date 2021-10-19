import styled from "styled-components";

export const SocialContainer = styled.div`
    position: fixed;
    bottom: 2em;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-height: 320px) {
        left: 3em;
    }

    @media screen and (min-height: 320px) {
        right: 3em;

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