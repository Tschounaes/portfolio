import styled from "styled-components";

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;

    .head-pusher {
        height: 0px;
        width: 100%;
        margin: 0px;
        padding: 0px;
        transition: height 0.4s;
    }

    main {
        overflow-y: scroll;
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

    .project-blog-posts {
        h2 {
            margin-top: 30px;
            margin-left: 12px;
        }
    }
    .project-tschounaes-player-container {
        --col-bg-player: ${props => props.theme.InternationalOrangeGoldenGateBridge66};
        width: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--col-bg-player) 100%);
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
        .head-pusher {
            height: 160px;
        }
    }
    @media screen and (max-height: 420px) {
        justify-content: center;

        .head-pusher {
            height: 70px;
        }
    }

`