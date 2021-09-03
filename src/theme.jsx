import { createGlobalStyle } from 'styled-components';

export const DefaultTheme = {
    //colors
    OuterSpaceCrayola: 'rgba(40, 61, 59, 1)',
    Skobeloff: 'rgba(25, 114, 120, 1)',
    ChampagnePink: 'rgba(237, 221, 212, 1)',
    InternationalOrangeGoldenGateBridge: 'rgba(196, 69, 54, 1)',
    LiverOrgan: 'rgba(119, 46, 37, 1)',


    //sizes
    XS: '10px',
    S: '12px',
    M: '16px',
    L: '22px',
    XL: '32',
}

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        background-color: ${props => props.theme.OuterSpaceCrayola};
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => props.theme.ChampagnePink};
    }

    #root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    
`;