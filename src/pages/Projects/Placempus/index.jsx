import React, {} from 'react';
import DevMessage from '../../../components/DevMessage';
import TschounaesPlayer from '../../../components/TschounaesPlayer';
import { ProjectWrapper } from './styled';
import PlacempusStill from '../../../assets/images/placempus_jonas_bienz_website_still.jpg'


const Placempus = () => {

    return (
        <ProjectWrapper>
            <TschounaesPlayer 
                src='https://www.dropbox.com/s/9hhz49ahduvv9a6/placempus_jonas_bienz_website.mp4?raw=1'
                alt={PlacempusStill}/>
            <h1>Placempus</h1>
        { false &&
            <DevMessage 
            title={'Placempus'}/> }
        </ProjectWrapper>
    )
}

export default Placempus;