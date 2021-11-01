import React, { 
    useState, 
    useEffect, 
    useRef } from 'react';

import Posts from '../../components/Posts';
import StretchTitle from '../../components/StretchTitle';
import SearchInput from '../../components/SearchInput';

import { BlogWrapper } from './styled';

import useZustand from '../../store_zustand';
import useRootOverflow from '../../hooks/useRootOverflow';



const Blog = () => {
    const wrapperRef = useRef();
    const titleRef = useRef();

    const { searchInputs, aboutOpen, footerOpen, setFooterOpen } = useZustand();

    const [columns, setColumns] = useState(
        window.innerWidth > 1024 ? [0,1,2] :
        window.innerWidth > 512 ? [0,1] :
        [0]);

    const urlBar = useRootOverflow();

    // --> Hides the blog-posts if they are less than 50% on the screen <--
    const handlePostHiding = () => {
        const windowHeight = window.innerHeight;
        Array.from(document.getElementsByClassName('blog')).forEach(entry => {
        const rect = entry.getBoundingClientRect()
        const ceY = rect.top + rect.height * 0.5;
        entry.style.opacity = ceY < 0 || ceY > windowHeight ? '0' : '1';
        entry.style.transform = ceY < 0 || ceY > windowHeight ? 'scale(20%)' : 'scale(100%)';
            if (entry.lastChild.firstChild.tagName === 'VIDEO') {
                entry.lastChild.firstChild.preload = ceY < 0 || ceY > windowHeight ? 'none' : 'metadata';
            }
        });
    }
    
    // --> Set the width of the title same as the column it seems to be contained in <--
    // --> And defines the maxWidth state used by the StretchTitle component <--
    const handleTitleWidth = () => {
        const blogContainer = wrapperRef.current;
        const blogTitle = titleRef.current;
        const space = blogContainer.getBoundingClientRect().width;
        // console.log('space: ' + space + ' cols: ' + columns.length);
        if (columns.length === 3) {
            blogTitle.style.width = `${space / 3}px`;
        } else if (columns.length === 2) {
            blogTitle.style.width = `${space / 2}px`;
        } else if (columns.length === 1){
            blogTitle.style.width = `${space / 1}px`;
        } else console.log(`yes, I'm debugging...`)
    }

    // --> Hide the search/title-section when user looks at posts <--
    const handleSearchHiding = () => {
        const blogTitle = titleRef.current;
        const blogStartElem = document.getElementsByClassName('blog-start')[0];
        if (blogStartElem.getBoundingClientRect().top <= -200) {
            blogTitle.style.opacity = '0';   
        } else {
            blogTitle.style.opacity = '1';
        }
        if (blogStartElem.getBoundingClientRect().bottom <= blogTitle.getBoundingClientRect().bottom - 30) {
            blogTitle.style['z-index'] = '100';
        } else {
            blogTitle.style['z-index'] = '205';
        }         
    }

    const handleFooter = () => {
        if (!aboutOpen) {
            const blogEndElem = document.getElementsByClassName('blog-end')[0];
            if (blogEndElem.getBoundingClientRect().bottom <= window.innerHeight + 5) {
                return !footerOpen ? setFooterOpen(true) : null;
            } else {
                return footerOpen ? setFooterOpen(false) : null;
            }
        } else {
            return footerOpen ? setFooterOpen(false) : null;
        }
    }

    // --> Set the amount of columns dependet on the main containers curent width <--
    const handleColumns = () => {
        const windowWidth = window.innerWidth;
        let columnsArray = [];
        if (windowWidth > 1024) {
            columnsArray = [0,1,2];
        } else if (windowWidth > 512) {
            columnsArray  = [0,1];
        } else {
            columnsArray  = [0];
        }
        setColumns(columnsArray)   
    }

    const handleBlogScroll = () => {
        const animationCallback = () => {
            handlePostHiding();
            handleSearchHiding();
            handleFooter();
        }
        window.requestAnimationFrame(animationCallback);    
    }
    

    // --> handle resize <--
    useEffect(() => {
        const resizeCallback = () => {
            handleColumns();
        }
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(resizeCallback, 100);
        }

        window.addEventListener('resize', resizeListener)
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    useEffect(() => handleTitleWidth(), [ columns ]);
    useEffect(() => handleFooter(), [ aboutOpen ]);


    return (
        <BlogWrapper
            style={{ overflowY: `${urlBar <= 5 && urlBar !== null ? 'scroll' : 'hidden'}`}}
            onLoad={handleTitleWidth}
            onScroll={handleBlogScroll}
            ref={wrapperRef}>
            <section 
                className='blog-title-container'
                ref={titleRef}>
                <StretchTitle title={'Blog'} maxWidth={window.innerWidth >= 1200 ? 400 : (window.innerWidth / columns.length) }/>
                <SearchInput inputId='mainBolgFilter'/>
            </section>

            {
            columns.map((col) => {
                return (
                    <div
                        className='gen-column'
                        key={'column-' + col}
                        style={ { 
                            position: 'absolute', 
                            width: `${columns.length > 2 ? 33 : columns.length > 1 ? 50 : 100}%`,
                            transform:`
                                translateX(${col * 100}%)
                                translateX(${columns.length > 2 ? col * 6 : 0}px)
                                translateY(${-100 * col}vh)`} }>
                        <Posts 
                            wrapper='blog' 
                            projectId='blog'
                            filter={searchInputs.mainBolgFilter} />
                    </div>
                ) 
            })
            }
        </BlogWrapper>
    )
}

export default Blog;
