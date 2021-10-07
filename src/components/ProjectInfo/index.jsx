import React , { useState, useEffect, useRef }from 'react';
import Markdown, { compiler } from 'markdown-to-jsx'
import { csv } from 'd3-fetch';
import ProjectsTable from '../../assets/tabels/projects.csv';
import ProjectsCreditsTable from '../../assets/tabels/projects_credits.csv';


import { ProjectInfoWrapper } from './styled';

const ProjectInfo = ({id}) => {
    const [projectData, setProjectData] = useState({});
    const [projectCreditsData, setProjectCreditsData] = useState([]);
    const [ collapsed, setCollapsed ] = useState(false);
    const [ contentHeight, setContentHeight ] = useState();
    const content = useRef();

    const handleCollapse = () => {
        setContentHeight(content.current.scrollHeight+30);
        setCollapsed(!collapsed);
    }
    
    useEffect(()=> {
        const getProjectData = () => {
            csv(ProjectsTable).then(data => setProjectData(data.filter(project => project.id === id)[0]));
            csv(ProjectsCreditsTable).then(data => setProjectCreditsData(data.filter(credit => credit.project_id === id)));
        }
        getProjectData();
    },[id])

    
    return (
        <ProjectInfoWrapper>
                <div className='project-synopsis'>{ compiler(projectData.synopsis ? projectData.synopsis : '', {wrapper: null, forceBlock: true}) } </div>
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
                <article
                    className={`project-about ${collapsed ? 'collapsed' : null}`}
                    style={{
                        height: !collapsed ? '112px' : `${contentHeight}px`,
                        transition: 'height 1.2s',
                    }}
                    onClick={handleCollapse}
                    ref={content}>

                <h2>About</h2>
                <Markdown
                    options={{ wrapper: 'div' }}>{projectData.about ? projectData.about: ''}</Markdown>
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
