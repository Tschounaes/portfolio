import React from 'react';

import StretchTitle from '../../../components/StretchTitle';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import ProjectInfo from '../../../components/ProjectInfo';
import Posts from '../../../components/Posts';
import ProjectFooterPusher from '../../../components/Footer/ProjectFooterPusher';

import { ProjectWrapper } from '../styled';

import BoddysseyStill from '../../../assets/images/boddyssey_trailer_jonas_bienz_website_still.png';
import Banner from '../../../components/Banner';


const Boddyssey = () => {
    // Project constants that are needed inside of the component
    const projectTitle = 'Boddyssey';
    const projectId = 'boddyssey';
    const videoUrl = 'https://www.dropbox.com/s/anajg5qyvmhs9v8/boddyssey_trailer_jonas_bienz_website.mp4?raw=1';
    const videoAlt = BoddysseyStill;

    return (
        <ProjectWrapper>
            <Banner src={videoAlt}/>
            <section className='aside-box'></section>
            <main>
                <div className='head-pusher'></div>
                <StretchTitle 
                    title={projectTitle}
                    maxWidth={1024}/>
                <TschounaesPlayer 
                    src={videoUrl}
                    alt={videoAlt}/>
                <ProjectInfo id={projectId} />

                <section className='project-blog-posts'>
                     <h2>Blog</h2>
                     <Posts wrapper='project' projectId={projectId}/>            
                </section>
                <ProjectFooterPusher/> 
            </main>
            
        </ProjectWrapper>
    )
}

export default Boddyssey;