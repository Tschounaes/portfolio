import React from 'react';

import StrechTitle from '../../../components/StretchTitle';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import ProjectInfo from '../../../components/ProjectInfo';

import { ProjectWrapper } from '../styled';

import PlacempusStill from '../../../assets/images/placempus_jonas_bienz_website_still.jpg'


const Placempus = () => {
    // Project constants that are needed inside of the component
    const projectTitle = 'Placempus';
    const projectId = 'placempus';
    const videoUrl = 'https://www.dropbox.com/s/9hhz49ahduvv9a6/placempus_jonas_bienz_website.mp4?raw=1';
    const videoAlt = PlacempusStill;

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

export default Placempus;