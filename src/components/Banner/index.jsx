import React from 'react';
import BannerWrapper from './styled'

const Banner = ({ src }) => {
    return (
        <BannerWrapper>
            <div>
                <img src={src} alt='project-banner'/>
            </div>  
        </BannerWrapper>
    )
}

export default Banner;
