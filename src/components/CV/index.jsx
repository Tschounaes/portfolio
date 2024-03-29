import React, { 
    useEffect, 
    useState, 
    useRef, 
    useCallback } from 'react';

import useZustand from '../../store_zustand';

import { csv } from 'd3-fetch';

import CVtable from '../../assets/tabels/cv.csv';
import WelcomeTabel from '../../assets/tabels/welcome.csv';
import useMonths from '../../hooks/useMonths';
import csvBeautyfyDate from '../../helpers/csvBeautyfyDate';
import sortByDate from '../../helpers/sortByDate';

import { CVWrapper } from './styled';

const CV = (props) => {
    // getting the size of the image for scaling welcome message
    const image = useRef();
    
    // scrolling change handling
    const container = useRef();
    const [ scrollTop, setScrollTop ] = useState();

    //bottomline of pseudo-container
    const pseudo = useRef();
    const [ bottomLine, setBottomLine] = useState();

    // data to fill in cv
    const [ CVData, setCVData ] = useState();
    const [ welcomeData, setWelcomeData ] = useState({});
    const [ types, setTypes ] = useState([]);
    const [ smallScreen, setSmallScreen ] = useState(false);
    const months = useMonths();

    // footer handling
    const { footerOpen, setFooterOpen, aboutOpen } = useZustand();

    const handleScroll = () => {
        setScrollTop(container.current.scrollTop);
        calcFooter();
    };  

    const getCVData = () => {
        csv(CVtable).then( data => {
           let types = new Set();
           data.sort((a, b) => {
               //get the type of the cv-entry for sorting purpose
                types.add(a.type);

                //actual sorting from date string
                return sortByDate(a, b, 'from');
           });
           setCVData(data);
           setTypes(types);
        });
    };

    const getWelcomeData = () => {
        csv(WelcomeTabel).then( p => {
            return p[0];
        }).then( data => {
            return { ...data, image: require('../../assets/images/' + data.image).default };
        }).then((welcomeObj) => {
            setWelcomeData(welcomeObj)
        });
    };

    const getRefs = (e) => {
        let PseudoContainerRect = pseudo.current.getBoundingClientRect();

        // set height of the div element containing the pseudonym
        const PseudoCalcHeight = `${PseudoContainerRect.width / (1247 / 168)}px`;

        pseudo.current.style.setProperty('height', PseudoCalcHeight, "important");

        // set the position of the profession title element
        PseudoContainerRect = pseudo.current.getBoundingClientRect();
        setBottomLine(PseudoContainerRect.bottom);

        // handle date formatting depending on window size
        setSmallScreen(PseudoContainerRect.width < 780);       
    };

    const calcFooter = useCallback(() => {
        if (aboutOpen) {
            const bottom = container.current.scrollTop - (container.current.scrollHeight - container.current.clientHeight);
            if (bottom >= -10) {
               setFooterOpen(true);
            } else if (bottom < -10) {
                setFooterOpen(false);
            } else return null;  
        } else return null;      
    },[footerOpen, setFooterOpen, aboutOpen]);

    useEffect(() => {
        getCVData();
        getWelcomeData(); 

        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => getRefs(), 150);
        }

        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    },[]);

    useEffect(() => calcFooter(),[aboutOpen, calcFooter]);

    useEffect(() => {
        getRefs();
        setScrollTop(container.current.scrollTop)
    },[]);

    useEffect(() => {
        const handleSafariBackdropBug = () => {   
            // fix safari backdrop-filter bug
            pseudo.current.style.webkitBackdropFilter = 'none';
            window.requestAnimationFrame(() => pseudo.current.style.webkitBackdropFilter = 'invert(100%)');   
        }
        return aboutOpen && scrollTop <= 5 ? handleSafariBackdropBug() : null;
    })
  
    return (
        <CVWrapper 
            ref={container}
            onScroll={(e) => handleScroll(e)}
            onTransitionEnd={getRefs}
            
            /* attributes from refs */
            open={props.open} 
            switch={scrollTop >= 5 }
            >

            <article
                id='introduction'>
                <p id='hi-i-am'>Hi, I'm</p>   
                <div
                    id= 'pseudonym-container' 
                    ref= { pseudo } 
                    ></div>
                <div 
                    id='profession' 
                    style={{ 
                            top: `${scrollTop >= 5 ? '50vh' : ( bottomLine - 6 )+'px'}`,  
                        }}>
                    <div>
                    { welcomeData.profession &&
                        welcomeData.profession.split('').map((letter,index) => {
                            return (
                            <h1 key={index + '_profession'}>{letter}</h1>
                            )})
                    }
                    </div>
                </div>
                <h1 id='invisible-text'>{welcomeData.pseudonym}</h1>
                
                <div id='welcome-container'>
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
                                        <li className={'timespan'}> 
                                            <span>{csvBeautyfyDate(entry.from, smallScreen ? 'en_short': 'en', months) + ' – '}</span>
                                            <span>{csvBeautyfyDate(entry.until, smallScreen ? 'en_short': 'en', months)}</span>
                                        </li>
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
            <div className='cv-footer'></div>

        </CVWrapper>
    )
}

export default CV;
