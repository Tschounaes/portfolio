import React from 'react';

import StretchTitle from '../../../components/StretchTitle';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import ProjectInfo from '../../../components/ProjectInfo';
import ProjectFooterPusher from '../../../components/Footer/ProjectFooterPusher';
import Posts from '../../../components/Posts';

import { ProjectWrapper } from '../styled';

import PlacempusStill from '../../../assets/images/placempus_jonas_bienz_website_still.jpg';
import Banner from '../../../components/Banner';


const Placempus = () => {
    // Project constants that are needed inside of the component
    const projectTitle = 'Placempus';
    const projectId = 'placempus';
    const videoUrl = 'https://www.dropbox.com/s/9hhz49ahduvv9a6/placempus_jonas_bienz_website.mp4?raw=1';
    const videoAlt = PlacempusStill;

    return (
        <ProjectWrapper> 
            <Banner src={videoAlt}/>
            <section className='aside-box'></section>
            <main>
                <div className='head-pusher'></div>
                <StretchTitle 
                    title={projectTitle}
                    maxWidth={1024}/>
                <div className='project-tschounaes-player-container'>
                    <TschounaesPlayer 
                        src={videoUrl}
                        alt={videoAlt}/>
                </div>
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

export default Placempus;