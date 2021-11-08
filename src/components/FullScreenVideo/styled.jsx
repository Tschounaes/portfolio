import styled from "styled-components";

export const FullScreenVideoWrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    
    overflow: visible;
    width: 100vw;
    height: ${props => `${props.size.height}px`};

    cursor: ${props => props.open ? 'pointer' : 'default'};
    transition: all 0.4s;

    * {
        position: fixed;
        top: 0px;
        transform: scale(105%)
    }
`