import styled from "styled-components";

export const BlogWrapper = styled.main`
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: 100vh;

    .blog-title-container {
        width: 33%;
        transition: opacity 1.2s;
    }
    
    .gen-column {
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
    }

    @keyframes enter {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }



   
   
`