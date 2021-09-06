import React from 'react';
import DevMessage from '../../components/DevMessage';
import FullScreenVideo from '../../components/FullScreenVideo';


const Home = () => {
    return (
        <>
        <FullScreenVideo />
    
    {
    false && 
        <div >
            <DevMessage 
            title={'Home'}/>
        </div>
    }
    </>
    )
}

export default Home;
