import React from 'react';
import './Portfolio.scss';

import aca_eagles_banner from "../img/portfolio/aca_eagles.png";


const Portfolio = () => {
    return (
        <section className="projects" id="portfolio">
            <div className='title'>Projects</div>
            <div className='projectGrid'>
                <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
            </div>
        </section>
    );
        
};

export default Portfolio;