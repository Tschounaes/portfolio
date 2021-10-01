import styled from "styled-components";

export const FullScreenVideoWrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: ${props => `${props.size.height}px`};
    display: flex;
    cursor: ${props => props.open ? 'pointer' : 'default'};
    transition: all 0.4s;

    align-items: center;
    justify-content: center;

    h1 {
        position: absolute;

    }

`