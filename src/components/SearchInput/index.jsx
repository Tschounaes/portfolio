import React, { useState, useEffect } from 'react';
import useZustand from '../../store_zustand';
import SearchInputWrapper from './styled';

import SearchIcon from '../../assets/svg/search_icon.svg';
import CrossIcon from '../../assets/svg/cross_icon.svg';


const SearchInput = ({ inputId }) => {
    const { searchInputs, setSearchInputs } = useZustand();
    const [ focus, setFocus ] = useState(false);
    const [ dots, setDots] = useState(0);
    const [ render, setRender ] = useState(false);

    const handleChange = (e) => {
        const entry  = {[inputId] : e.target.value};
        setSearchInputs(entry);
        if (!render && e.target.value) {
            setRender(true)
        }
    }

    const handleFocus = (e) => {
        setFocus(e.type === 'focus' ? true : false)
    }

    const handleRender = () => {
        if (!searchInputs[inputId]) {
            setRender(false);
        }
    }

    useEffect(() => {
        let dotTimer = window.setTimeout(() => {
            setDots((dots+1)%3);
        }, 500)

        return () => {
            clearTimeout(dotTimer)
        }
    },[dots])
    
    return (
        <SearchInputWrapper 
            focus={focus} 
            icons={{search: SearchIcon, cross: CrossIcon}}
            switch={searchInputs[inputId]}>
            <div className='search-decoration'>
                <div className='svg-container'></div>
                { !searchInputs[inputId] &&
                    <p>{'Search' + (dots === 0 ? '.' : dots === 1 ? '..' : '...')}</p>
                }
            </div>
            <input type='text' value={ searchInputs[inputId] ? searchInputs[inputId] : '' } onChange={handleChange} onFocus={handleFocus} onBlur={handleFocus}/>
            { render &&
            <div 
                className='clear-button'
                onAnimationEnd={handleRender}
                onClick={() => setSearchInputs({[inputId] : ''})}
                >
                <div className='cross-icon-container'></div> 
            </div>
            }
        </SearchInputWrapper>
    )
}

export default SearchInput;
