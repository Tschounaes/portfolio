import React, { useState, useEffect } from 'react';
import { FooterWrapper } from './styled';
import { ReactComponent as TschounaesLogo } from '../../assets/svg/tschounaes_icon.svg';
import { ReactComponent as Pseudo } from '../../assets/svg/pseudo-mask.svg';
import useZustand from '../../store_zustand';

const Footer = () => {
    const { footerOpen } = useZustand();
    const [ render, setRender ] = useState(footerOpen) 


    useEffect(() => {
        const handleRender = () => {
            if (footerOpen) {
                setRender(true);
            } else return null; 
        }
        handleRender();
    },[footerOpen])

    return (
        <>
        { render &&
        <FooterWrapper 
            onAnimationEnd={() => setRender(footerOpen)}
            open={ footerOpen } >
            <div className='brand'>
                <TschounaesLogo/>
                <Pseudo/>
            </div>  
            <p className='copy-right'>© 2021 Tschounaes</p>
            <p className='copy-right'>Please do not reproduce without the expressed written consent of Tschounaes, Jonas Bienz</p>
            <p className='dev-note'>This website was bootstrapped with <a href='https://github.com/facebook/create-react-app'>Create React App</a></p>    
        </FooterWrapper>
        }
        </>    
    )
}

export default Footer;
