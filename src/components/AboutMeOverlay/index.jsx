import React, { useState } from 'react';
import { ReactComponent as TschounaesLogo } from '../../assets/svg/tschounaes_icon.svg';
import { AboutMeOverlayWrapper } from './styled';
import CrossIcon from '../../assets/svg/cross_icon.svg';

import CV from '../CV';



const AboutMeOverlay = () => {
    const [ open, setOpen ] = useState(false);

    const openHandler = () => {
        if (!open) {
            setOpen(true);
        } else {
            return null;
        }
    }

    const closeHandler = () => {
        if (open) {
            setOpen(false);
        } else {
            return null;
        }
    }

    return (
        <AboutMeOverlayWrapper onClick={openHandler} open={open} crossIcon={CrossIcon}>
            <TschounaesLogo />
            <p id='about-me-title'>aboute me</p>
                <CV open={open}/>
            { open &&
                <div className='close-button' onClick={closeHandler}>
                    <div className='cross-container'></div>
                </div> 
            }

        </AboutMeOverlayWrapper>
    )
}

export default AboutMeOverlay;
