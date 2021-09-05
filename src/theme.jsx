import { createGlobalStyle } from 'styled-components';

export const DefaultTheme = {
    //colors
    OuterSpaceCrayola: 'rgba(40, 61, 59, 1)',
    Skobeloff: 'rgba(25, 114, 120, 1)',
    Skobeloff66: 'rgba(25, 114, 120, 0.66)',
    ChampagnePink: 'rgba(237, 221, 212, 1)',
    InternationalOrangeGoldenGateBridge: 'rgba(196, 69, 54, 1)',
    LiverOrgan: 'rgba(119, 46, 37, 1)',
    Transparent: 'rgba(25, 114, 120, 0)',


    //sizes
    XS: '10px',
    S: '12px',
    M: '16px',
    L: '22px',
    XL: '36px',
}

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        background-color: ${props => props.theme.OuterSpaceCrayola};
        overflow: hidden;
        font-family: OpenSans, Roboto, sans-serif;
        color: ${props => props.theme.ChampagnePink};

        p {
            margin-block-start: 0px;
            margin-block-end: 0px;
            font-size: ${props => props.theme.M};
            font-family: Roboto, sans-serif;
        }
        h1 {
            font-size: ${props => props.theme.XL};
            font-family: OpenSans, sans-serif;
            font-weight: 700;
            margin: 0.5em 0em 0.5em 0em;

        }
        h2 {
            font-size: ${props => props.theme.L};
            font-family: OpenSans, sans-serif;
            font-weight: 400;
            margin: 0.1em 0em 0.5em 0em;
        }
    }

    #root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    
`;