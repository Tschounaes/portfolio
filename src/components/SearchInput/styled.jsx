import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(100%);
    }
    60% {
        transform: scale(120%);
    }
    to {
        opacity: 1;
        transform: scale(100%);
    }
`

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: scale(100%);
    }

    40% {
        transform: scale(120%);
    }

    100% {
        opacity: 0;
        transform: scale(100%);
    }
`

const SearchInputWrapper = styled.div`
    width: 95%;
    min-width: 150px;
    height: 36px;
    background: ${props => props.focus ? props.theme.ChampagnePink : props.theme.ChampagnePink66};

    position: relative;
    display: flex;
    align-items: center;
    border-radius: 18px;
 
    transition: all 0.4s;

    * {
        transition: all 0.4s;
    }

    input {
        height: 100%;
        width: 85%;
        background: transparent;
        border: none;
        outline: none;
        position: absolute;
        z-index: 2;
        margin: 0px;
        margin-left: calc(20px + 2 * 10px);
        padding: 0px;
        color: ${props => props.theme.Skobeloff}
    }

    .search-decoration {
        position: absolute;
        z-index: 1;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: left;

        p {
               
            color: ${props => props.theme.InternationalOrangeGoldenGateBridge };
            width: 80%;
            font-size: ${props => props.focus ? '12px' : '16px'};
            margin-left: 3px;
        }

        .svg-container {
            height: auto;
            width: 20px;
            aspect-ratio: 1 / 1;
            background: ${props => props.theme.InternationalOrangeGoldenGateBridge };
            mask: url(${props => props.icons.search});
            mask-repeat: no-repeat;
            mask-size: contain;
            margin: 0px 10px;
        }    
    }
    
    .clear-button {
        z-index: 2;
        position: absolute;
        right: 0px;
        margin-right: 10px;

        height: 24px;
        width: auto;
        aspect-ratio: 1 / 1;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 12px; 
        cursor: pointer;

        animation-name: ${ props => props.switch ? fadeIn : fadeOut };
        animation-duration: 0.8s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;

        transition: background-color 0.4s;

        .cross-icon-container {
            height: 14px;
            width: auto;
            aspect-ratio: 1 / 1;
            background: ${ props => props.theme.InternationalOrangeGoldenGateBridge };
            mask: url(${ props => props.icons.cross });
            mask-repeat: no-repeat;
            mask-size: contain;
        }

        :hover {
            background-color: ${ props => props.theme.InternationalOrangeGoldenGateBridge };
            .cross-icon-container {
                background-color: ${ props => props.theme.ChampagnePink };
            }
        }
    }
`

export default SearchInputWrapper;