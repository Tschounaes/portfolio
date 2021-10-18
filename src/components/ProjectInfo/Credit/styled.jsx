import styled from "styled-components";

const CreditWrapper = styled.li`
    background-color: ${props => props.linked ? props.theme.OuterSpaceCrayola : props.theme.OuterSpaceCrayola66};
    cursor: ${props => props.linked ? 'pointer' : null};
    margin: 4px 8px 4px 0px;
    padding: 3px 6px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    transition: transform 0.4s, background-color 0.4s;

    *:first-child {  
        color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
        font-size: ${props => props.theme.XS};
        margin-right: 6px;     
    }
    
    *:last-child {
        font-weight: bold;
        font-size: ${props => props.theme.S};
        text-decoration: none;
        color: ${props => props.theme.ChampagnePink}; 
    }
    
    :hover {
        transform: ${props => props.linked ? 'scale(103%)' : null};
        background-color: ${props => props.linked ? props.theme.ChampagnePink66 : null};
    }
`

export default CreditWrapper;