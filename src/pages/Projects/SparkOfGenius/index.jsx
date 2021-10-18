import React from 'react';
import StretchTitle from '../../../components/StretchTitle';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import ProjectInfo from '../../../components/ProjectInfo';
import Posts from '../../../components/Posts';

import { ProjectWrapper } from '../styled';

import SparkStill from '../../../assets/images/sparkofgenius_jonas_bienz_website_still.png';

const SparkOfGenius = () => {
     // Project constants that are needed inside of the component
     const projectTitle = 'Spark of Genius';
     const projectId = 'spark_of_genius';
     const videoUrl = 'https://www.dropbox.com/s/bbrfodlife8f9d4/sparkofgenius_jonas_bienz_website.mp4?raw=1';
     const videoAlt = SparkStill;

     return (
         <ProjectWrapper>
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
             </main>
         </ProjectWrapper>
     )
}

export default SparkOfGenius;