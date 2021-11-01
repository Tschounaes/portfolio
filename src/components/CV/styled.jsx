import styled from "styled-components";
import Circle from '../../assets/svg/cv_mask.svg';
import PseudonymMask from '../../assets/svg/pseudo-mask.svg';



export const CVWrapper = styled.div`
    height: ${props => !props.open ? '0vh' : '100vh'};
    max-width: ${props => !props.open ? '0px' : '1024px'};
    width: ${props => !props.open ? '0vh' : '100%'};
    opacity: ${props => !props.open ? '0' : '1'};
    transition: ${props => !props.open ?
        'height 1.2s 0.4s, width 1.2s 0.4s, max-width 1.2s 0.4s, opacity 0s' :
        'height 1.2s, width 1.2s, max-width 1.2s, opacity 0.4s 1.2s'};
    overflow-y: scroll;


    #introduction {
        display: flex;
        flex-direction: column;   
        justify-content: center;
        align-items: center;

        #hi-i-am {
            z-index: 430;

            position: ${props => !props.open ? 'static' : 'absolute'};
            width: 100%;
            right: 0;
            top: 176px;

            font-size: 46px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 0.25em;

            padding-bottom: 6px;
            
            opacity: ${props => props.switch ? 0 : 1};
            transition: opacity 0.4s 0.1s;
        }

        #pseudonym-container {
            z-index: 430;

            backdrop-filter: invert(100%); 
            -webkit-backdrop-filter: invert(100%);

            position: absolute;
            left: 1.5vw;
            top: 240px;

            width: ${props => !props.open ? '0vw' : '97vw'};
            max-width: 1500px;

            -webkit-mask-image: url(${PseudonymMask});
            mask-image: url(${PseudonymMask});
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: contain;
            mask-size: contain;
            -webkit-mask-position: center;
            mask-position: center;
            
            transform: ${props => `translate(${props.switch ? 120 : 0}vw)`};   
            transition: transform 2s 0.4s;
        }


        #profession {
            z-index: 440;

            position: ${props => !props.open ? 'static' : 'absolute'};
            left: ${props => props.switch ? '50%' : '0%'};
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          
            div {
                width: ${props => props.switch ? '100vh' : '100%'};
                margin: 0px 15px;
                display: flex;
                justify-content: space-around;
                font-size: ${props => props.theme.XL};
                white-space: nowrap;
                text-transform: uppercase;
                transition: ${props => props.switch ? 
                    'transform 0.8s 0.8s, width 1.2s 1.4s' : 
                    'transform 0.8s 0.0s, width 1.2s 0s' };

                h1 {
                    min-width: 1%;
                    font-size: 46px; 
                    margin-top: 4px;
                }
            }

            --transforms-here: ${props => `
                translateX(${props.switch ? -27 : -0}px)
                rotate(${props.switch ? 90 : 0}deg)
                scale(${props.switch ? 60 : 100}%)
                ` };

            transform: var(--transforms-here);
            -webkit-transform: var(--transforms-here);
            -moz-transform: var(--transforms-here);
            -o-transform: var(--transforms-here);
            -ms-transform: var(--transforms-here);


            translate: ${props => props.switch ? '-27px' : 'px'} 0px;
            rotate: ${props => props.switch ? '90deg' : '0deg'};
            scale: ${props => props.switch ? 0.6 : 1.0};

            @media screen {
                @supports (-moz-transform: var(--transforms-here)) {
                    translate: none;
                    rotate: none;
                    scale: none;
                }
            }
            

            transition: ${props => props.switch ? 
                'translate 0.8s 0.8s, rotate 0.8s 0.8s, scale 0.8s 0.8s, transform 0.8s 0.8s, left 1.2s 1.4s, top 1.2s 1.4s' :
                'translate 0.8s 0.0s, rotate 0.8s 0.0s, scale 0.8s 0.0s, transform 0.8s 0.0s, left 1.2s 0s, top 1.2s 0s' };
            }

        #invisible-text {
            z-index: 450;

            position: relative;

            padding-bottom: calc(20% + 200px);
            width: ${props => !props.open ? '0vh' : '100%'};

            opacity: 0;
            user-select: none; /* Standard */
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            
        }
        
        #welcome-container {
            --col: ${props => props.theme.colorComplement66};
            z-index: 450;
            position: relative;
            width: 100%;
            padding: 10px 0px;
   
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: var(--col);
            backdrop-filter: invert(80%);
             
            img {
                margin-top: 0px;
                width: 36%;
                mask: url(${Circle});
                mask-size: contain;
                mask-position: center;
                mask-repeat: no-repeat;
                transform: translateX(-10%) scale(115%);
            }

            #welcome-text {
                position: relative;
                z-index: 430;
                width: 64%;
                h2 {
                    padding-left: 15px;
                }
                p {
                    padding-left: 40px;
                    padding-right: 40px;
                }
            }
        }



        @media screen and (max-height: 420px) {
            #hi-i-am {
                top: 120px;
            }
            #pseudonym-container {
                top: 180px;
            }

            #profession {
                div {
                    h1{
                        font-size: 28px; 
                    }
                }     
            }
        }

        @media screen and (max-width: 512px) {  
            #hi-i-am { 
                font-size: 28px;
            }
            #pseudonym-container {
                top: 210px;
            }
            #profession {
                div{
                    transform: ${props => `translateX(${props.switch ? -20 : -0}px)`};
                    h1{
                        font-size: 28px;  
                    }
                }
            }
            #invisible-text {
                padding-bottom: calc(12% + 100px);
            }
            #welcome-container {
                justify-content: center;
                img {
                    margin-top: 30px;
                    transform: translateX(0%) translateY(15%);
                    width: 100%;
                }
                #welcome-text {
                    width: 100%;
                }
            }
        }

        @media screen and (max-width: 512px) and (min-height: 600px) {
            #hi-i-am {
                top: 220px;
            }
            #pseudonym-container {
                top: 250px;
            }
        }

        @media screen and (min-width: 512px) and (max-width: 1024px) and (min-height: 512px){
            #hi-i-am {
                top: 250px;
            }
            #pseudonym-container {
                top: 300px;
            }
        }
    }

    .cv-topic {
        z-index: 450;
        position: relative;
        margin-right: 3em;

        h2 {
            margin-top: 30px;
            padding: 8px 30px;
            text-transform: capitalize;
            background-color: ${props => props.theme.colorBright66};
            color: ${props => props.theme.colorComplement};
            border-radius: 0px 20px 20px 0px;
            width: min-content;

        }

        ul {
            display: grid;
            grid-template-columns: 35% 65% ;
            grid-template-rows: auto auto auto;
            grid-template-areas: 'ts nm' 'ts pl' 'ts dc';
            grid-column-gap: 15px;
            margin-bottom: 1em;
 
            li {
                width: 100%;
                list-style: none;
                span {
                    display: inline-block;
                    white-space: nowrap;
                    margin-right: 3px;
                }
            }
            .name {
                grid-area: nm;
                font-weight: bold;

            }
            .timespan {
                grid-area: ts;
            }
            .description {
                margin-top: 0.25em;
                grid-area: dc;
                margin-left: 1em;
            }
            .place {
                grid-area: pl;
                font-size: ${props => props.theme.S};
            }
        }
    }

    .cv-footer {
        z-index: 430;
        position: relative;

        height: 160px;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 160px;
        //background-color: ${props => !props.open ? props.theme.colorTransparent : props.theme.colorDark66};
        transition: background-color 0.4s;
    }

    @media screen and (max-height: 400px) {
            .cv-footer {
                height: 92px;
                margin-bottom: 92px;
            }
        }
    @media screen and (max-width: 420px) {
        .cv-topic {
            ul {
                font-size: 14px;
            }
        }
    }
`