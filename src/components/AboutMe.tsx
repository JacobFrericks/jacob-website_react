import React from 'react';
import Hexagon from './Hexagon';
import './AboutMe.scss';
import me from '../img/profile_pic.png';

let fastText = "Fast load times and lag free interaction. My highest priority.";
let intuitiveText = "Strong preference for easy to use intuitive UX/UI.";
let responsiveText = "My layouts will work on any device, big or small.";
let dynamicText = "Websites don't have to be static. I love making pages come to life.";

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='title'>About</div>
            <div className="aboutGrid">
                <div className="gridItem">
                    <Hexagon
                        title="Fast"
                        text={fastText}
                        icon="coffee"
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="Intuitive"
                        text={intuitiveText}
                        icon="coffee"
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="Responsive"
                        text={responsiveText}
                        icon="coffee"
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="Dynamic"
                        text={dynamicText}
                        icon="coffee"
                    />
                </div>
            </div>
            <div className='profilePicWrapper'>
                <img src={me} className="me" alt="My profile"/>
            </div>
            <div className='profile'>
                <div className='profileTitle'> Who's this guy?</div>
                <div className='profileBody'>
                    I'm a Front-End Developer for ChowNow in Los Angeles, CA.<br/>
                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.  Let's make something special.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;