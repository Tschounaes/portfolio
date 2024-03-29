import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    aspect-ratio: 0.6 / 1;
    min-height: 220px;
    max-height: 400px;
    height: 28vh;
    justify-content: flex-end;
    z-index: 300;
    


    nav {
        margin-top: 2em;
        margin-right: 3em;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;

        transition: margin-top 0.4s, margin-right 0.4s;
    }

    @media screen and (max-width: 512px) {
        nav {
            margin-top: 1em;
            margin-right: 1.5em;
        }
    }   
`
