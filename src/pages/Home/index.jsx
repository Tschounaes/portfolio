import React, { useEffect, useState, useCallback } from 'react';
import FullScreenVideo from '../../components/FullScreenVideo';
import { ReactComponent as PlayLogo} from '../../assets/svg/play_icon.svg';
import { ReactComponent as RandomSymbol} from '../../assets/svg/random_symbol.svg';
import useZustand from '../../store_zustand';

import HomeWrapper from './styled';


const Home = (props) => {
    const [ suggestion, setSuggestion ] = useState(false);
    const [ renderSwitch, setRenderSwitch ] = useState(true);
    const [ messageSwitch, setMessageSwitch ] = useState(true);
    const { footerOpen, setFooterOpen, aboutOpen } = useZustand();

    const handleAnimationEnd = (e) => e.animationName === 'disappear' ? setRenderSwitch(!renderSwitch) : null;

    const handleClick = (e, id) => {
        switch(id) {
            case 'showreel-link':
                window.open('https://vimeo.com/user79993283', '_blank').focus();
                break;
            case 'random-project':
                console.log(Math.random());
                if (Math.random() >= 0.66) {
                    props.history.push('/placempus');
                } else if (Math.random() >= 0.33) {
                    props.history.push('/boddyssey');
                } else {
                    props.history.push('/spark-of-genius');
                }
                break;
            default: 
                return null;
        }
    }

    useEffect(()=> {
        let timeoutId = setTimeout(() => setSuggestion(true), 10000);
        return () => clearTimeout(timeoutId);
    },[]);

    const handleMouseMove = useCallback((e) => {
        const h = window.innerHeight;
        const p = e.clientY
        if((h-p) <= 120 && !footerOpen) {
            setFooterOpen(true);  
        }
        if((h-p) > 120 && footerOpen) {
            setFooterOpen(false); 
        }
    },[ footerOpen, setFooterOpen]);
 
    useEffect(() => !aboutOpen && footerOpen ? setFooterOpen(false) : null, [ aboutOpen ]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    },[ handleMouseMove ]);

    useEffect(() => {
        if (suggestion) {
            const timeoutId = setTimeout(() => setMessageSwitch(!messageSwitch), 3500);
            return () => clearTimeout(timeoutId);
        } else return null;
    },[ messageSwitch, suggestion ]);


    
    return (
        <HomeWrapper>
            <FullScreenVideo />
            { suggestion &&
            <> 
            { renderSwitch ?
                <div
                    onClick={(e) => handleClick(e, 'showreel-link')}
                    onAnimationEnd={handleAnimationEnd}
                    className={`suggestion showreel-link ${messageSwitch ? 'appear' : 'disappear'}`}>
                    <PlayLogo/>
                    <p> Watch high quality showreel on Vimeo</p>
                </div> :
                <div 
                    onClick={(e) => handleClick(e, 'random-project')}
                    onAnimationEnd={handleAnimationEnd}
                    className={`suggestion random-project ${messageSwitch ? 'disappear' : 'appear'}`}>
                    <RandomSymbol/>
                    <p> Go to random featured project</p>
                </div>
            }
            </>
            
        }
        
        </HomeWrapper>
    )
}

export default Home;
