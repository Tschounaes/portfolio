import React from 'react';
import styled from 'styled-components';

const StretchWrapper = styled.div`
    width: 100%;
    .mockup-title {
        opacity: 0;
        height: 0px;
        width: 0px;
        overflow: hidden;
        user-select: none;
    }
    .project-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 100px;
        font-weight: bold;
        text-transform: uppercase;


    }
`

const StretchTitle = ({ title }) => {
    return (
        <StretchWrapper>
            <h1 className='mockup-title'>{title}</h1>
            <div className='project-title'>
            {
                title.split('').map((letter, index) => {
                    return  <div key={index + '_title'}>{letter}</div>
                })
            }
            </div>
        </StretchWrapper>
    )
}

export default StretchTitle;
