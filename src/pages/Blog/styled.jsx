import styled from "styled-components";

export const BlogWrapper = styled.main`
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    overflow: hidden;

    .blog-title-container {
        width: 33%;
        padding-top: 0px;
        transition: all 0.4s;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    
    .gen-column {
        z-index: 200;
        overflow: hidden;
        animation-name: enter;
        animation-duration: 0.4s; 
    }

    .gen-column:nth-child(2) {
        animation-delay: 0.4s;
        animation-fill-mode: both;
    }
    .gen-column:nth-child(3) {
        animation-delay: 0.8s;
        animation-fill-mode: both;
        
    }
    .gen-column:nth-child(4) {
        animation-delay: 1.2s;
        animation-fill-mode: both; 
        article {
            margin-right: 0px !important; 
        }    
    }

    @keyframes enter {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 1450px) {
        .blog-title-container {
            padding-top: 160px;
        }  
    }

    @media screen and (max-width: 1200px) {
        .gen-column:nth-child(2) {
            article {
                margin-left: 0px !important;
            }    
        }
    }

    @media screen and (max-width: 1024px) {
        .gen-column:nth-child(3) {
            article {
                margin-right: 0px !important;
            }    
        }
    }

    @media screen and (max-width: 512px) {
        .gen-column:nth-child(2) {
            article {
                margin-right: 0px !important;
            }    
        }
    }

    @media screen and (max-height: 420px) {
        .blog-title-container { 
            padding-top: 92px;
        }
    }



   
   
`