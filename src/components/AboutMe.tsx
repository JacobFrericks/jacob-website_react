import React from 'react';
import styles from './AboutMe.module.css';
import profilePic from '../img/profile_pic.png'

let generalDescription = "My name is Jacob, and I am a software developer. I love working with the cloud, Docker containers, and focusing on building secure and scalable applications. I have experience deploying production applications to both GCP and AWS, hardening containers, and deploying the containers by themselves or in a Kubernetes cluster.";
let githubPointer = "Feel free to take a look through my projects in the portfolio below. Also, a lot of the projects are available on my GitHub. If that is of more interest to you, please check out "

const AboutMe = () => {
    return (
        <div className={styles.module}>
            <div className="col-12 text-center">
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-10"><h2 className={styles.title}>About Me</h2></div>
                    <div className="col-1"/>
                </div>
                <div className="row">
                    <div className="col-2"/>
                    <div className="col-8"><h4 className={styles.subtitle}>Short description about myself</h4></div>
                    <div className="col-2"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3"/>
                <div className="col-6">
                    {generalDescription}
                    <br/>
                    <br/>
                    {githubPointer} <a href="https://github.com/JacobFrericks" target="_blank">my GitHub page</a>.
                    <br/>
                    <br/>
                </div>
                <div className="col-3"/>
            </div>
            <div className="row text-center">
                <div className="col-3"/>
                <div className="col-6">
                    <img src={profilePic} alt=""/>
                </div>
                <div className="col-3"/>
            </div>
        </div>
    );
};

export default AboutMe;