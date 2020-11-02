import React from 'react';
import Hexagon from './Hexagon';
import './AboutMe.scss';
import me from '../img/profile_pic.jpg';

let secureText = "Keep your cloud environment secure. My highest priority.";
let developerText = "We're on the same team. I don't slow them down from delivery.";
let devsecopsText = "Automate as much as humanly possible.";
let speedText = "Ship as many things as quickly and securely as possible";

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='title'>About</div>
            <div className="aboutGrid">
                <div className="gridItem">
                    <Hexagon
                        title="Secure"
                        text={secureText}
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="Developers"
                        text={developerText}
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="DevSecOps"
                        text={devsecopsText}
                    />
                </div>
                <div className="gridItem">
                    <Hexagon
                        title="Speed"
                        text={speedText}
                    />
                </div>
            </div>
            <div className='profilePicWrapper'>
                <img src={me} className="me" alt="My profile"/>
            </div>
            <div className='profile'>
                <div className='profileTitle'> Who's this guy?</div>
                <div className='profileBody'>
                    I'm a Cloud Security Engineer for Hy-Vee in Des Moines, IA.<br/>
                    I focus on cloud security, but have a passion for programming and developers.<br/>
                    Let me help you make something special.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;