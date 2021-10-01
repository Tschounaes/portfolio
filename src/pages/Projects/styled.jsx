import styled from "styled-components";

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: left;

    main {
        position: relative;
        overflow: scroll;
        max-width: 1024px;
        height: 100vh;
        flex-shrink: 0;
        margin-right: 120px;
    }
    
    .aside-box {
        max-width: calc(1024px * 0.5);
        width: 100%;
        height: 100vh;
        visibility: hidden;
        margin-right: 120px ;
    }

    @media screen and (max-width: calc(1024px + 240px)) {
        justify-content: center;

        main {
            margin-right: 0px ; 
            flex-shrink: 1;
        }
        .aside-box {
            margin-right: 0px ;
            width: 0px;
        }
    }

`