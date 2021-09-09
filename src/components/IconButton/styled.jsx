import styled from "styled-components";

export const IconButtonWrapper = styled.button`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: right;
    margin: 0.6em, 0em;
    width: auto;

    background-color: ${props => props.select ? props.theme.InternationalOrangeGoldenGateBridge : props.theme.Skobeloff};
    z-index: ${props => props.select ? 2 : 0};
    border-radius: 1.2em;

    cursor: pointer;
    border: none;
    color: none;
    padding: 0.6em;
    position: absolute;
    transform: translateY(${props => props.open ? 3 * props.navIndex : 0}em);
    transition: transform 0.6s ${props => ((4 - props.navIndex) / 8.0) }s, background-color 0.8s;
    

    p {
        color: ${props => props.theme.ChampagnePink};
        text-transform: capitalize;
        text-align: right;
        font-size: ${props => props.theme.S};
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    .svg-container {
        aspect-ratio: 1 / 1;
        min-height: ${props => props.theme.M};
        background-color: ${props => props.theme.ChampagnePink};
        -webkit-mask-box-image: url(${props => props.icon});
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-position: center;    
    }

    :hover {
        background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
        transition: background-color 0.4s;
        p {
            width: ${props => props.width};
            padding-right: 0.6em;
            transition: width 0.8s, color 0.4s;
        }
        
    }
`