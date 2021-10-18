import styled from "styled-components";

const CollapseComponentWrapper = styled.div`
    overflow: hidden;
    cursor: ${props => props.collapsed ? 'zoom-out' : 'zoom-in'};

    background-color: ${props => props.theme.Skobeloff66};
    transition: height 0.8s, background-color 0.4s;
    
    .collapse-component-measure-box {
        height: min-content;
        width: 100%;

        margin: 0px;
        padding: 0px;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    :hover {
        background-color: ${props => props.theme.Skobeloff};
    }
`

export default CollapseComponentWrapper;