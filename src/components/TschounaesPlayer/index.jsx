
import React, { useRef, useState, useEffect } from 'react';

//components
import DevMessage from '../DevMessage';

//style
import { TschounaesPlayerWrapper } from './styled';

//helpers
import clamp from '../../helpers/clamp';
import secToTimestamp from '../../helpers/secToTimestamp';

//icons
import {ReactComponent as PlayIcon} from '../../assets/svg/play_icon.svg';
import {ReactComponent as PauseIcon} from '../../assets/svg/pause_icon.svg';
import {ReactComponent as EnterFullscreen} from '../../assets/svg/enter_fullscreen.svg';
import {ReactComponent as ExitFullscreen} from '../../assets/svg/exit_fullscreen.svg';
import {ReactComponent as AudioOn} from '../../assets/svg/audio_on.svg';
import {ReactComponent as AudioOff} from '../../assets/svg/audio_off.svg';


const TschounaesPlayer = (props) => {
    const video  = useRef();
    const container = useRef();
    const playbar = useRef();
    const [ playing, setPlaying ] = useState(false);
    const [ fullscreen, setFullscreen ] = useState(false);
    const [ mute, setMute ] = useState(false);
    const [ vidtime, setVidtime ] = useState(0);
    const [ buffertime, setBuffertime ] = useState(0);
    const [ duration, setDuration] = useState(0);
    const [ pos, setPos] = useState(0);
    const [ mouseOver, setMouseOver] = useState(false);
    const [ hover, setHover ] = useState(false);
    const [ visible, setVisible] = useState(true);
    const [ loaded, setLoaded ] = useState(false);


    const handlePlay = () => {
        if (video.current.paused) {
            video.current.play();
            setPlaying(true);
            setVisible(false);
        } else {
            video.current.pause();
            setPlaying(false);
            setVisible(true);
        }   
    };

    const handleFullscreen = () => {  
        if(document.fullscreenElement == null) {
            container.current.requestFullscreen( { navigationUI: 'hide' } );
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const handleMute = () => {
        if(video.current.muted) {
            video.current.muted = false;
            setMute(true);
        } else {
            video.current.muted = true;
            setMute(false);
        }
    };

    const moveJimmy  = (e) => {
        e.stopPropagation();
        switch (e.type) {
            case 'mousemove':
                const currDimensions = playbar.current.getBoundingClientRect();
                const newpos = clamp((e.clientX - currDimensions.left)/currDimensions.width, 0, 1);
                setPos(newpos);
                break;
            case 'mouseout':
                setPos(vidtime/duration);
                setMouseOver(false);
                break;
            case 'mouseover':
                setMouseOver(true);
                break;
            case 'click':  
                video.current.currentTime = (pos * duration).toFixed(2);
                break;
            default:
                console.error(e.type + ' is not handled!');
        }
    };

    const handleTime = (e) => {
        setVidtime(e.target.currentTime.toFixed(2));
        if (e.target.readyState > 2) {
            setBuffertime(video.current.buffered.end(0)); 
        }
    };

    const handleVisible = () => {
        if(!visible && playing) {
            setVisible(true);
                window.setTimeout(() => {        
                        setVisible(false)
                }, 2000);
            }
    };

    const handleLoad = () => {
        setDuration(video.current.duration);
        setLoaded(true);
    }
 
    useEffect(() => {
        const handleKeypress = (e) => {
            e.preventDefault();
            if (hover) {
                switch(e.code) {
                    case 'Space':
                        handlePlay();
                        break;
                    default:
                        return null;
                }
            }
        }

        document.addEventListener('keypress', handleKeypress);
        return () => {
            document.removeEventListener('keypress', handleKeypress);
        };
    },[hover]);

    useEffect(() => {
        if (!playing) {
            setVisible(true);
        }
    },[playing]);

    useEffect(() => {
        console.log(video.current.readyState);
        video.current.load();
        
    },[])

    return (
        <TschounaesPlayerWrapper 
        ref={container} 
        visible={visible || mouseOver || !playing}>
            <div className='tschounaes-player-gui-container'>
                <video
                    ref={video} 
                    type='video/mp4'
                    playsInline
                    src={props.src}
                    poster={props.alt}
                    onTimeUpdate={handleTime}
                    onCanPlay={handleLoad}
                    />
                { loaded ?
                <div 
                    onClick={handlePlay} 
                    onMouseMove={handleVisible}
                    onMouseOver={ () => setHover(true) } 
                    onMouseOut={ () => setHover(false) }
                    id='play-overlay'>
                    {!playing ? <PlayIcon/> : null}
                </div> :
                <div id='load-message' image={props.alt}>
                    <DevMessage 
                        title={'Loading Video'}
                        location={props.src}
                        message={`Just a second, I'm getting loaded from Dropbox! ^^'`}/>
                </div>
                }
                
                { loaded &&
                <div className='player-contols'>
                    <div 
                        ref={playbar}
                        id='playbar'>
                        <div id='playbar-bg'></div>
                        <div id='buffer' style={ {width: `${(buffertime/duration) * 100}%`} }></div>
                        <div id='jimmy' style={ {width: `${pos * 100}%`} }></div>
                        <div id='progress' style={ {width: `${(vidtime/duration) * 100}%`} }></div>
                        <div id='timestamp' style={{left: `${mouseOver ? pos * 100 : (vidtime/duration) * 100}%`}}>{secToTimestamp(mouseOver ? (pos * duration).toFixed(2) : vidtime)}</div>
                        <div 
                            onMouseMove={moveJimmy}
                            onMouseOut={moveJimmy}
                            onMouseOver={moveJimmy}
                            onClick={moveJimmy}
                            id='hover-container'></div>             
                    </div>
                    <div id='controls'>
                        <div onClick={handlePlay} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                            {!playing ? <PlayIcon/> : <PauseIcon/>}
                        </div>
                        <div onClick={handleFullscreen} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                            {fullscreen ? <ExitFullscreen/> : <EnterFullscreen/>}
                        </div>
                        <div onClick={handleMute} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                            {mute ? <AudioOff/> : <AudioOn/>}
                        </div>
                    </div>
                </div>
                }
            </div>
        </TschounaesPlayerWrapper>
    )
}

export default TschounaesPlayer
