import React , { useState, useEffect }from 'react';
import { compiler } from 'markdown-to-jsx';

import { csv } from 'd3-fetch';
import ProjectsTable from '../../assets/tabels/projects.csv';
import ProjectsCreditsTable from '../../assets/tabels/projects_credits.csv';

import { ProjectInfoWrapper, SpecWrapper } from './styled';

import Credit from './Credit';
import CollapseComponent from './CollapseComponent';


const ProjectInfo = ({ id }) => {
    const [projectData, setProjectData] = useState({});
    const [projectCreditsData, setProjectCreditsData] = useState([]);
    
    useEffect(()=> {
        const getProjectData = () => {
            csv(ProjectsTable).then(data => setProjectData(data.filter(project => project.id === id)[0]));
            csv(ProjectsCreditsTable).then(data => setProjectCreditsData(data.filter(credit => credit.project_id === id)));
        }
        getProjectData();
    },[id])

    return (
        <ProjectInfoWrapper>
            <article className='project-synopsis'>
                <div className='project-synopsis-text'>
                { compiler(projectData.synopsis ? projectData.synopsis : '', { wrapper: null, forceBlock: true }) } 
                </div>
            </article>

            <CollapseComponent collapseHeight={60}>
                <article className='project-credits'>
                    <h2>Credits</h2>
                    <ul className='project-credits-list'>{ projectCreditsData.map((credit, index) => <Credit {...credit} key={credit.name + index}/>) }</ul>
                </article>
            </CollapseComponent>

            <CollapseComponent collapseHeight={112}>
                <article className='project-about'>
                    <h2>About</h2>
                    <div className='project-about-text'> 
                        { compiler(projectData.about ? projectData.about: '', { wrapper: null, forceBlock: true }) }
                    </div>
                </article>

                <article className='project-specs'>
                    <h2>Technical Specs</h2>
                    <ul className='project-specs-list'>
                        { Object.entries(projectData).map((spec, index) => {
                            return (
                                spec[0].slice(0,2) === 't_' && spec[1] !== '' ? 
                                <SpecWrapper key={spec[1] + index}>
                                    <span>{spec[0].slice(2).replace('_', ' ')}</span> 
                                    <span>{spec[1]}</span>
                                </SpecWrapper> : null )})
                        }     
                    </ul>
                </article>
            </CollapseComponent>
        </ProjectInfoWrapper>
    )
}

export default ProjectInfo
