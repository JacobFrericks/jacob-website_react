import React, {Component} from 'react';
import './Portfolio.scss';
import aca_eagles_banner from "../img/portfolio/aca_eagles.png";

let Scroll   = require('react-scroll');

class Portfolio extends Component {
    render() {
        let Element  = Scroll.Element;
        return (
            <section className="projects" id="portfolio">


                <Element name="myScrollToElement"/>
                <div className='title'>Projects</div>
                <div className='projectGrid'>
                    <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                    <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                    <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                    <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>
                </div>
            </section>
        );
    }
        
}

export default Portfolio;