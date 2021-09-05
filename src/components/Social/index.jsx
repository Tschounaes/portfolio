import React from 'react'


import IconButton from '../IconButton';
import LinkedinIcon from '../../assets/svg/linkedin_logo.svg';
import MailIcon from '../../assets/svg/mail_icon.svg';
import InstagramIcon from '../../assets/svg/instagram_icon.svg';
import { SocialContainer } from './styled';

const socialContent = [
    ['mail', 'tschounaes.art@gmail.com', MailIcon, '22px'],
    ['linkedin', 'https://www.linkedin.com/in/jonas-bienz-1930471b3/', LinkedinIcon, '44px'],
    ['instagram', 'https://www.instagram.com/tschounaes_art/', InstagramIcon, '54px'],
]

const Social = () => {
    return (
        <SocialContainer>
             { socialContent.map((linkSet,index) => {
                        return(
                            <IconButton
                                name={linkSet[0]}
                                link={linkSet[1]}
                                icon={linkSet[2]}
                                width={linkSet[3]}
                                key={'social-'+index} 
                                navIndex={index}
                                open={true}
                            />)
                    })
                }
            
        </SocialContainer>
    )
}

export default Social
