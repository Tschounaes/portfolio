import styled from 'styled-components';

export const DevMessageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    * {
        transition: all 0.4s;
    }

    article {
        border: solid 2px ${props => props.theme.colorComplement};
        border-radius: 15px;
        padding: 1.5em;
        width: 32%;
        min-width: 250px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        svg {
            width: 30%;
            height: 30%;
            aspect-ratio: 1 / 1;
        }

        .gear {
            fill: ${props => props.theme.colorComplement}
        }

        h1 {
            margin-top: 0px;
            margin-bottom: 6px;
            white-space: nowrap;
        }
        h2 {
            max-width: 90%;
            font-style: italic;
            font-size: ${props => props.theme.S};
            margin-bottom: 6px;
            padding: 0px 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
        p {
            margin-top: 12px;
            text-align: center;
        }
    }


`