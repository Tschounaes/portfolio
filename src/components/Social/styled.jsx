import styled from "styled-components";

export const SocialContainer = styled.div`
    z-index: 1;
    position: absolute;
    right: 3em;
    bottom: 2em;
    display: flex;
    justify-content: flex-end;

    .over-write-button {
        position: static;
        margin-left: 0.6em;
        transform: translateY(0px);
        background-color: ${props => props.theme.Skobeloff};
        :hover {
            background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
            transition: background-color 0.4s;
        }
    }
`