import React , { useState, useEffect }from 'react';
import { csv } from 'd3-fetch';
import ProjectsTable from '../../assets/tabels/projects.csv';
import ProjectsCreditsTable from '../../assets/tabels/projects_credits.csv';

import { ProjectInfoWrapper } from './styled';

const ProjectInfo = ({id}) => {
    const projectName = id;
    const [projectData, setProjectData] = useState({});
    const [projectCreditsData, setProjectCreditsData] = useState([])
    const getProjectData = () => {
        csv(ProjectsTable).then(data => setProjectData(data.filter(project => project.id === projectName)[0]));
        csv(ProjectsCreditsTable).then(data => setProjectCreditsData(data.filter(credit => credit.project_id === projectName)));
    }
    
    useEffect(()=> {
        getProjectData()
    },[])

    
    return (
        <ProjectInfoWrapper>
                <p className='project-synopsis'>{projectData.synopsis}</p>
                <article className='project-credits'>
                    <h2>Credits</h2>
                    <ul>
                        {
                        projectCreditsData.map((credit, index) => {
                            return (
                                credit.link !== '' ?
                                <li key={credit.name + index}>
                                    <span>{credit.role}</span>
                                    <a href={credit.link} target="popup">{credit.name}</a>
                                </li> :
                                <li key={credit.name + index}>
                                    <span>{credit.role}</span>
                                    <span>{credit.name}</span>
                                </li>
                            );
                        })
                        }
                    </ul>
                </article>
                <article className='project-about'>
                <h2>About</h2>
                    <p>{projectData.about}</p>
                    <ul>
                        <h2>Technical Specs</h2>
                        {
                            Object.entries(projectData).map((spec, index) => {
                                return (
                                    spec[0].slice(0,2) === 't_' &&  spec[1] !== '' ? 
                                    <li key={spec[1] + index}><span>{spec[0].slice(2).replace('_', ' ')}</span> <span>{spec[1]}</span></li> : 
                                    null
                                );
                            })
                        }
                        
                    </ul>
                </article>
            </ProjectInfoWrapper>
    )
}

export default ProjectInfo
