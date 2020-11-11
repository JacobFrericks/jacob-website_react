import React from 'react';
import './Hexagon.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Hexagon = (props) => {
    return (
        <div>
            <div className="hexContainer">
                <div className="hexagon">
                    <FontAwesomeIcon icon={props.icon} className='fontawesome'/>
                </div>
            </div>
            <div className='textContainer'>
                <div className='label'>{props.title}</div>
                {props.text}
            </div>
        </div>
    );
};

export default Hexagon;