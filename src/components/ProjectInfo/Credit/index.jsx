import React from 'react';
import CreditWrapper from './styled';

const Credit = ({ link, name, role }) => {

    const handleClick = () => {
        window.open(link, '_blank').focus();
    }

    return ( 
        <CreditWrapper onClick={handleClick} linked={link !== ''}>
            {
            link !== '' ?
            <>
                <span>{role}</span>
                <a href={link} target="popup">{name}</a>
            </> :
            <>
                <span>{role}</span>
                <span>{name}</span>
            </>
            }     
        </CreditWrapper> 
    )
}

export default Credit;
