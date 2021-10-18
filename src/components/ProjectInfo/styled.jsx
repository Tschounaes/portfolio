import styled from "styled-components";

export const ProjectInfoWrapper = styled.section`
    
    width: 100%;

    article {
        width: 100%;
        height: 100%;
        display: grid;
        padding: 21px 12px 21px 12px;

        h2 {
            margin-top: 0px;
            width: 100px;
            white-space: nowrap;
        }
    }

    .project-about  {
        width: 66%;
        grid-template-columns: 100px auto;
        grid-template-rows: repeat(2, auto);
    }

    .project-credits {
        grid-template-columns: 100px auto;
        grid-template-rows: repeat(2, auto);
    }

    .project-specs {
        width: calc(33% - 48px);
    }

    .project-synopsis {
        background-color: ${props => props.theme.InternationalOrangeGoldenGateBridge66};
        grid-template-columns: 1fr;
        width: 100%;
        padding: 0px;   
    }

    .project-credits-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        padding-left: 0px;
    }

    .project-about-text, .project-synopsis-text {
        p {
            margin-bottom: 6px;
        }
    }

    .project-synopsis-text {
        padding: 12px 12px 21px 12px;
    }

    .project-specs-list {
        flex-direction: column;
        list-style: none;
        padding: 0px;
    } 
    
    @media screen and (max-width: 1024px) {
            article {
                grid-template-columns: 1fr !important;
            }
    }
    @media screen and (max-width: 768px) {
        article {
            width: 100% !important;
        }
    }

`

export const SpecWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 0px;

    span {
        width: 70%;
    }

    span:first-child {
        width: 30%;
        color: ${props => props.theme.InternationalOrangeGoldenGateBridge};
        font-size: ${props => props.theme.S};
        text-transform: capitalize;
        margin-right: 8px;
        text-align: right;
    }

    @media screen and (max-width: 768px) {
        justify-content: left;

        span:first-child {
            width: 80px !important;
            white-space: nowrap;
            text-align: left !important;

        }
    
        

    }
`