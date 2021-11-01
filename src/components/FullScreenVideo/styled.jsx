import styled from "styled-components";

export const FullScreenVideoWrapper = styled.div`
    position: relative;
    z-index: 10;
    overflow: hidden;
    width: 100vw;
    height: ${props => `${props.size.height}px`};

    cursor: ${props => props.open ? 'pointer' : 'default'};
    transition: all 0.4s;

    * {
        position: absolute;
        left: 0px;
        top: 0px;
    }
`