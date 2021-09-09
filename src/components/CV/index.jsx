import React, { useEffect, useState, useRef } from 'react';
import { csv } from 'd3-fetch';
import CVtable from '../../assets/tabels/cv.csv';
import WelcomeTabel from '../../assets/tabels/welcome.csv';
import { CVWrapper } from './styled';

const CV = (props) => {
    // getting the size of the image for scaling welcome message
    const image = useRef();
    const [smallScreen, setSmallScreen] = useState(false);
    
    // scrolling change handling
    const container = useRef();
    const [scrollTop, setScrollTop] = useState();

    //bottomline of pseudo-container
    const pseudo = useRef();
    const [ bottomLine, setBottomLine] = useState()

    // data to fill in cv
    const [CVData, setCVData] = useState();
    const [welcomeData, setWelcomeData] = useState({});
    const [types, setTypes] = useState([]);

    const getScrollTop = () => {
        setScrollTop(container.current.scrollTop);
    }    

    const getCVData = () => {
        csv(CVtable).then( data => {
           let types = new Set();
           data.sort((a, b) => {
               //get the type of the cv-entry for sorting purpose
                types.add(a.type);

                //actual sorting from date string
                const yearA = parseInt(a.from.split('/')[2],10);
                const yearB = parseInt(b.from.split('/')[2],10);
                if (yearA === yearB) {
                    const monthA = parseInt(a.from.split('/')[0],10);
                    const monthB = parseInt(b.from.split('/')[0],10);
                    return monthB - monthA;
                } else {
                    return yearB - yearA;
                }
           })
           setCVData(data);
           setTypes(types);
        });
    }

    const getWelcomeData = () => csv(WelcomeTabel).then( data => setWelcomeData(data[0]));

    const getRefs = () => {
        image.current.getBoundingClientRect().width <= 320.1 ? 
        setSmallScreen(true) : 
        setSmallScreen(false);
        setBottomLine(pseudo.current.getBoundingClientRect().bottom)
    }

    useEffect(() => {
        getCVData();
        getWelcomeData();
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => getRefs(), 150);
        }
        window.addEventListener('resize', resizeListener)
        return () => window.removeEventListener('resize', resizeListener);
    },[])




    return (
        <CVWrapper 
            ref={container}
            onScroll={getScrollTop}
            onTransitionEnd={getRefs}
            /* attributes from refs */
            open={props.open} 
            scrollTop={scrollTop}
            bottomLine={bottomLine}
            smallScreen={smallScreen} 
            >

            <article id='introduction'>
                <p id='hi-i-am'>Hi, I am</p>   
                <div id='pseudonym-container' ref= { pseudo } ></div>
                <h1 id='profession'>{welcomeData.profession}</h1>
                <h1 id='invisible-text'>{welcomeData.pseudonym}</h1>
                
                <div className={'welcomeContainer'}>
                    <div id='welcome-text'>
                        <h2>{`${welcomeData.firstName} ${welcomeData.secondName} ${welcomeData.lastName}`}</h2>
                        <p>{welcomeData.introduction}</p>
                    </div>
                    <img ref={ image } src={welcomeData.image} alt='jonasbienz' />
                </div>
            </article>        
            {
                Array.from(types).map((type, index) => {
                    return(
                        <article 
                            key={type + index} 
                            className='cv-topic'>
                            <h2 >{type}</h2>
                            { CVData.map((entry) => {
                                return (
                                    <div key={'cv-entry' + entry.id}>
                                    { entry.type === type &&
                                    <ul key={'cv-entry' + entry.id}>
                                        <li className={'name'}> {entry.name}</li>
                                        <li className={'timespan'}> {entry.from + ' - ' + entry.until}</li>
                                        <li className={'description'}> {entry.description}</li>
                                        <li className={'place'}> {entry.place}</li>
                                    </ul>
                                    }
                                    </div>
                                )
                            })}
                        </article>
                    )
                })
            } 

        </CVWrapper>
    )
}

export default CV;
