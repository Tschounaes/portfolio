import { createGlobalStyle } from 'styled-components';

export const DefaultTheme = {
    /* //colors VARIATION_03
    colorDark: 'rgba(27, 32, 33, 1)',
    colorDark66: 'rgba(27, 32, 33, 0.5)',

    colorMedium: 'rgba(48, 52, 63, 1)',
    colorMedium66: 'rgba(48, 52, 63, 0.5)',

    colorBright: 'rgba(255, 217, 218, 1)',
    colorBright66: 'rgba(255, 217, 218, 0.5)',

    colorComplement: 'rgba(234, 99, 140, 1)',
    colorComplement66: 'rgba(234, 99, 140, 0.5)',

    colorComplementDark: 'rgba(137, 2, 62, 1)',
    colorTransparent: 'rgba(0, 0, 0, 0)', */

    /* //colors VARIATION_02
    colorDark: 'rgba(29, 53, 87, 1)',
    colorDark66: 'rgba(29, 53, 87, 0.5)',

    colorComplement: 'rgba(230, 57, 70, 1)',
    colorComplement66: 'rgba(230, 57, 70, 0.5)',

    colorBright: 'rgba(241, 250, 238, 1)',
    colorBright66: 'rgba(241, 250, 238, 0.5)',

    colorMedium: 'rgba(69, 123, 157, 1)',
    colorMedium66: 'rgba(69, 123, 157, 0.5)',

    colorComplementDark: 'rgba(168, 218, 220, 1)',
    colorTransparent: 'rgba(0, 0, 0, 0)', */

    //colors VARIATION_01
    colorDark: 'rgba(40, 61, 59, 1)',
    colorDark66: 'rgba(40, 61, 59, 0.5)',

    colorMedium: 'rgba(25, 114, 120, 1)',
    colorMedium66: 'rgba(25, 114, 120, 0.5)',

    colorBright: 'rgba(237, 221, 212, 1)',
    colorBright66: 'rgba(237, 221, 212, 0.5)',

    colorComplement: 'rgba(196, 69, 54, 1)',
    colorComplement66: 'rgba(196, 69, 54, 0.5)',

    colorComplementDark: 'rgba(119, 46, 37, 1)',
    colorTransparent: 'rgba(0, 0, 0, 0)',


    //sizes
    XS: '10px',
    S: '12px',
    M: '16px',
    L: '22px',
    XL: '36px',
}

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: transparent;
        ::-webkit-scrollbar {
            background-color: transparent;
            width: 0px;
        }
        ::-webkit-scrollbar-button {
            visibility: hidden;
        } 
        ::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
        ::-webkit-scrollbar-track {

        }
        ::-webkit-scrollbar-track-piece {

        }
        ::-webkit-scrollbar-corner {

        }
        ::-webkit-resizer {

        }
    }

    #root {
        width: 100vw;
        height: 100vh;
        margin: 0px;
        padding: 0px;
        overflow-y: visible;
        background-color: ${props => props.theme.colorDark};
    }
    
    body {
        overflow-x: hidden;
        margin: 0px;
        padding: 0px;
        background-color: ${props => props.theme.colorDark};
        font-family: OpenSans, Roboto, sans-serif;
        color: ${props => props.theme.colorBright};

        main {
            -webkit-overflow-scrolling: touch;
        }

        svg {
            fill: rgba(0,0,0,1);

            path{
                fill: inherit;
            }
        }

        p {
            margin-block-start: 0px;
            margin-block-end: 0px;
            font-size: ${props => props.theme.M};
            font-family: Roboto, sans-serif;
        }
        h1 {
            font-size: ${props => props.theme.XL};
            font-family: Roboto, sans-serif;
            font-weight: 700;
            margin: 0.5em 0em 0.5em 0em;

        }
        h2 {
            font-size: ${props => props.theme.L};
            font-family: OpenSans, sans-serif;
            font-weight: 400;
            margin: 0.1em 0em 0.5em 0em;
        }

        ul {
            margin: 0.1em 0em 0.5em 0em;
        }
    }

  
`;