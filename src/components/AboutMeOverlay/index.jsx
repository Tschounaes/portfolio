import React from 'react';
import useZustand from '../../store_zustand';
import { ReactComponent as TschounaesLogo } from '../../assets/svg/tschounaes_icon.svg';
import { AboutMeOverlayWrapper } from './styled';
import CrossIcon from '../../assets/svg/cross_icon.svg';

import CV from '../CV';


const AboutMeOverlay = () => {
    const { closeAboutMe, aboutOpen, setAboutOpen } = useZustand();

    const openHandler = () => {
        if (!aboutOpen) {
            setAboutOpen(true);
        } else {
            return null;
        }
    }

    const closeHandler = () => {
        if (aboutOpen) {
            setAboutOpen(false);
        } else {
            return null;
        }
    }

    return (
        <AboutMeOverlayWrapper onClick={openHandler} open={aboutOpen} toggleClose={closeAboutMe} crossIcon={CrossIcon}>
            <div id='logo-container'>
                <TschounaesLogo alt='tschounaes_logo'/>
            </div>
            <p id='about-me-title'>aboute me</p>
            <CV open={aboutOpen}/>
            { aboutOpen &&
                <div className='close-button' onClick={closeHandler}>
                    <p>Close About Me</p>
                    <div className='cross-container'></div>
                </div> 
            }

        </AboutMeOverlayWrapper>
    )
}

export default AboutMeOverlay;
