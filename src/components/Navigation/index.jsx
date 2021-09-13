import React from 'react';
import useZustand from '../../store_zustand';

import { NavContainer } from './styled';

import IconButton from '../IconButton';
import BlogIcon from '../../assets/svg/blog_icon.svg';
import HomeIcon from '../../assets/svg/home_icon.svg';
import GeniusIcon from '../../assets/svg/genius_icon.svg';
import BoddysseyIcon from '../../assets/svg/boddyssey_icon.svg';
import PlacempusIcon from '../../assets/svg/placempus_icon.svg';

const navContent = [
    ['home', '/', HomeIcon, '30px'],
    ['boddyssey', '/boddyssey', BoddysseyIcon, '58px'],
    ['placempus', '/placempus', PlacempusIcon, '56px'],
    ['spark of genius', '/spark-of-genius', GeniusIcon, '86px'],
    ['blog', '/blog', BlogIcon, '23px'],
]


const Navigation = () => {
    const { setNavOpen } = useZustand()

    const handleExpand = (e) => {
        switch (e.type) {
            case 'mouseenter':
                setNavOpen(true)
                break;
            case 'mouseleave':
                setNavOpen(false)
                break;
            default: 
                return null;
        }
    }

    return (
        <NavContainer onMouseEnter={handleExpand} onMouseLeave={handleExpand}>
            <nav>
                { navContent.map((linkSet,index) => {
                        return(
                            <IconButton
                                name={linkSet[0]}
                                link={linkSet[1]}
                                icon={linkSet[2]}
                                width={linkSet[3]}
                                key={'nav-'+index} 
                                navIndex={index}
                            />)
                    })
                }
            </nav>
        </NavContainer>
    )
}

export default Navigation;