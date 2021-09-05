import { useHistory } from 'react-router-dom';
import useZustand from '../../store_zustand';
import { IconButtonWrapper } from './styled';

const IconButton = (props) => {
    const { select, setSelect } = useZustand()

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        if (props.link[0] === '/') {
            setSelect(props.navIndex)
            history.push(props.link);
        } 
        if (props.link.slice(0,4) === 'http') {
            window.open(props.link)
        }
        if (props.link.split('@').length === 2) {
            window.location = 'mailto:'+ props.link;
        }

    }
 
    return (
        <IconButtonWrapper
            className='over-write-button'
            select={select === props.navIndex}
            open={props.open}
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