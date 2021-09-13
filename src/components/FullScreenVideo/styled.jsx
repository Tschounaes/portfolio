import styled from "styled-components";

export const FullScreenVideoWrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: ${props => `${props.size.height}px`};
    display: flex;

    align-items: center;
    justify-content: center;

`