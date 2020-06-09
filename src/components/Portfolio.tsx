import React from 'react';
import './Portfolio.scss';

import styles from './Portfolio.module.css';

import aca_eagles_banner from "../img/portfolio/aca_eagles.png";


const Portfolio = () => {
    return (
        <div>
            <div className='title'> Projects</div>
            <img src={aca_eagles_banner}/>
        </div>
    );
        
};

export default Portfolio;