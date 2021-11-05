import styled from "styled-components";

export const PostsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    .hover-box {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 280;
        top: 0px;
    }

    // Style for posts in a project
    article.project {
        position: relative;
        width: calc(50% - 6px);
        min-height: 200px;
        margin-bottom: 12px;
        background-color: ${props => props.theme.colorMedium66};
        transition: background-color 0.4s;

        .blog_media {
            position: absolute;
            top: 0px;
            right: 0px;

            width: min-content;
            max-width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            mask: linear-gradient(to left, rgba(255,255,255,1) 35%, rgba(0,0,0,0) 100%);

            * {
                height: 100%;
            }
        }
        .blog_content {
            position: relative;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 42px auto;

          
            h3 {
                align-self: center;
                margin-left: 12px;
            }

            div {
                margin-left: 12px;
                margin-bottom: 30px;
            }
            .post-date {
                align-self: center;
                justify-self: right;
                margin-right: 12px;
                font-size: ${props => props.theme.S};
            }
        }
    }
    article.project:nth-child(even) {
        margin-right: 12px;
    }
    article.project:hover {
        background-color: ${props => props.theme.colorMedium};
    }

    @media screen and (max-width: 512px) {
        article.project {
            width: 100%;
        }
        article.project:nth-child(even) {
            margin-right: 0px;
        }
    }


    //Style for posts in the main blog
    article.blog {
        z-index: 210;
        margin: 30px 12px;
        padding: 0px;
        position: relative;
        transition: opacity 0.8s, transform 0.8s, scale 0.8s, background-color 0.4s;
        overflow: hidden;

        background-color: ${props => props.theme.colorMedium66};
        .blog_media {
            width: 100%;
            transform: translateY(3px);
            mask: linear-gradient(to top, rgba(255,255,255,1) 35%, rgba(0,0,0,0) 100%);

            * {
                width: 100%;
            }
        }
        .blog_content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas: 'tit dat' 'txt txt';
            transform: translateY(30px);

            h3 {
                grid-area: tit;
                align-self: center;
                margin: 0px 0px 0px 12px;
            }
            .post-date {
                grid-area: dat;
                align-self: center;
                justify-self: right;
                margin-right: 12px;
                font-size: ${props => props.theme.S};
            }
            div {
                grid-area: txt;
                margin: 12px 12px 0px 12px;
            }
        }
    }

    article.blog:hover {
        background-color: ${props => props.theme.colorMedium};
    }

    .blog-start {
        z-index: 202;
        height: 33vh;
        width: 100%;
        transition: height 0.4s;
        .project-title {
            flex-direction: row;
            position: fixed;
            
        }       
    }

    .blog-end {
        height: 50vh;
        width: 100%; 
    }

    @media screen and (max-width: 1450px) {
        .blog-start {
            height: 50vh;
        }
        @media screen and (max-height: 500px) {
            .blog-start {
                height: 90vh;
            }
        }

        @media screen and (max-width: 512px) and (min-width: 482px){
            .blog-start {
                height: 420px;
            }
        }
    }

`