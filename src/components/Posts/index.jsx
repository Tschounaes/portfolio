import React, { useState, useEffect, useCallback } from 'react';
import { csv } from 'd3-fetch';
import Markdown from 'markdown-to-jsx';

import BlogTable from '../../assets/tabels/blog.csv';
import csvBeautyDate from '../../helpers/csvBeautyfyDate';
import useMonths from '../../hooks/useMonths';
import sortByDate from '../../helpers/sortByDate';

import { PostsWrapper } from './styled';


const Posts = ({wrapper, projectId, filter}) => {
    const [ blogData, setBlogData ] = useState([]);
    const [ filteredData, setFilteredData ] = useState([]);
    const months = useMonths()
    const testType = new RegExp('mp4');

    const handleActiveArticle = (e) => {
        const media = e.target.parentNode.lastChild.firstChild;
        if (media.tagName === 'VIDEO') {
            switch (e.type) {
                case 'mouseenter':
                    if (media.paused) {
                        media.play();
                    }
                    break;
                case 'mouseleave':
                    if (!media.paused && media.readyState >= 2) {
                        media.pause()
                    } 
                    break;
                default:
                    return null;
            }
        }
    }

    const handleFilter = useCallback((data) => {
        if(filter) {
            const testValue = new RegExp(filter.toLowerCase());
            const filtered = data.filter(post => {
            const searchString = (post.title + post.text + post.tags).toLowerCase();
            return testValue.test(searchString)
            })
        return filtered;
        } else {
            return data;
        };
    },[filter]);

    useEffect(() => {
        const getBlogData = () => {
            csv(BlogTable).then(data => {
                const filtered = data.filter(post => {
                    const tags = post.tags.split(', ');
                    let result = false;
                    for (let tag of tags) {
                        if (tag === projectId) {
                            result = true;
                            break;
                        }
                    }
                    return result;
                }).sort((a,b) => sortByDate(a,b, 'date'));
                setBlogData(filtered);
                setFilteredData(filtered);
            });
        }
        getBlogData();
    },[projectId]);

    useEffect(() => {
        const filtered = handleFilter(blogData)
        setFilteredData(filtered);
    },[filter, handleFilter, blogData]);

    return (
        <PostsWrapper>
            <div className={wrapper + '-start'}></div>
            { filteredData.length > 0 ? 
            filteredData.map((post, index) => {
                return(
                    <article
                        onMouseEnter={handleActiveArticle}
                        onMouseLeave={handleActiveArticle}
                        key={ 'post_' + index }
                        id={ 'post_' + index }
                        className={wrapper}>
                        <div className='hover-box'></div>
                        <div className='blog_content' >
                            <h3>{post.title}</h3>
                            <p className='post-date'>{csvBeautyDate(post.date, 'en', months)}</p>
                            <Markdown options={{ wrapper: 'div', forceWrapper: true }}>{post.text}</Markdown> 
                        </div>

                        <div className='blog_media'>
                        {
                        post.media.search(testType) !== -1 ? 
                            <video muted='muted' preload='none' playsInline loop poster={post.poster}>
                                <source src={post.media} type='video/mp4' />
                            </video>
                            : 
                            <img src={post.media} alt={post.title + '_asset'}/>
                        } 
                        </div>
                    </article>
                )
            }) :
            <p style={{padding: '12px'}}>There are no blog entries to this topic yet.</p>
            }
            <div className={wrapper + '-end'}></div>
        </PostsWrapper>
    )
}

export default Posts;
