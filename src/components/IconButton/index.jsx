import { useHistory } from 'react-router-dom';
import useZustand from '../../store_zustand';
import { IconButtonWrapper } from './styled';

const IconButton = (props) => {
    const { select, setSelect } = useZustand();
    const { navOpen, setNavOpen } = useZustand();
    const { aboutOpen, setAboutOpen } = useZustand();

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        if (props.link[0] === '/') {
            if (!navOpen) {
                setNavOpen(true);
            } else {
                setSelect(props.navIndex);
                history.push(props.link);
            }
        } else if (props.link.slice(0,4) === 'http') {
            window.open(props.link);
        } else if (props.link.split('@').length === 2) {
            window.location = 'mailto:'+ props.link;
        } else {
            switch (props.link) {
                case 'ABOUT_OPEN':
                    return !aboutOpen ? setAboutOpen(true) : null;
                default:
                    console.error('case: ' + props.link + ' is not handled');
            }
        }
    }
 
    return (
        <IconButtonWrapper
            className='over-write-button'
            select={select === props.navIndex}
            open={navOpen}
            navIndex={props.navIndex}
            icon={props.icon} 
            width={props.width}
            onClick={ handleClick }>
           <p>{props.name}</p>
           <div className="svg-container"></div>
        </IconButtonWrapper>
    )
}

export default IconButton;