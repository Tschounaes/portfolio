import React from 'react';

import StrechTitle from '../../../components/StretchTitle';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import ProjectInfo from '../../../components/ProjectInfo';

import { ProjectWrapper } from '../styled';

import BoddysseyStill from '../../../assets/images/boddyssey_trailer_jonas_bienz_website_still.png'


const Boddyssey = () => {
    // Project constants that are needed inside of the component
    const projectTitle = 'Boddyssey';
    const projectId = 'boddyssey';
    const videoUrl = 'https://www.dropbox.com/s/anajg5qyvmhs9v8/boddyssey_trailer_jonas_bienz_website.mp4?raw=1';
    const videoAlt = BoddysseyStill;

    return (
        <ProjectWrapper>
            <section className='aside-box'></section>
            <main>
                <StrechTitle title={projectTitle}/>
                <TschounaesPlayer 
                    src={videoUrl}
                    alt={videoAlt}/>
                <ProjectInfo id={projectId} />
            </main>
        </ProjectWrapper>
    )
}

export default Boddyssey;