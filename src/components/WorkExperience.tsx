import React from 'react';
import styles from "./WorkExperience.module.css"
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';


const WorkExperience = () => {
    return (
        <div className={styles.module}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Work Experience</h2>
                        <br/>
                    </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="November 2019 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Cloud Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Principal Financial Group</h4>
                        <p>
                            <b>Claims</b><br/>
                            I currently work with the Claims team on refactoring their services to AWS.<br/><br/>
                            We use several technologies, such as AWS, Serverless, Cloud Formation, Typescript, AWS Lambda, Fargate, API Gateway, CircleCI, Java, Spring Boot. This involves confidential customer data, so security has to be our top concern.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#000' }}
                        date="April 2017 - November 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Principal Financial Group</h4>
                        <p>
                            <b>Employer Web</b><br/>
                            The goal of this project was to update a legacy website to be more responsive and to greatly increase the speed of transactions.
                            <br/><br/>
                            The technologies used in this product include Javascript and React/Redux on the front end as well as Spring Boot/Java on the back end, along with SQL for communication with our database. We are using Microservices to allow for reusability from other teams. We currently have 4 services, and are looking at splitting more off as the need arises.
                            <br/><br/>
                            Starting near the end of 2018, we started the initiative of moving Employer Web from on site to Google Cloud Platform (GCP). We worked with the Security and Infrastructure teams to be one of the first teams to deploy a service to the cloud. We targeted tools such as Docker and Kubernetes, as Employer Web has several microservices. Since we were the first project to do this, we had to build our own tools to satisfy corporate requirements and make our lives easier. We used tools such as CircleCI, Docker, Kubernetes, Python, Pytest, Behave, and Google Cloud Platform.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="January 2015 - April 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Cloud Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">International Business Machines (IBM)</h4>
                        <p>
                            <b>Microservices Squad</b><br/>
                            I worked in the Micro Services squad to create and maintain several projects, including Common Service Broker ( to help other squads turn their apps into services within Bluemix), Service Proxy and Docker-for-Bluemix.
                            I also worked with other teams to interface with our services and provide support when needed.
                            <br/><br/>
                            <b>Build Team</b><br/>
                            I created and managed Jenkins and Gerrit servers, and assisting other developers in using these tools. I also helped others in using Git to connect to Gerrit and GitHub.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2013 - January 2015"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">International Business Machines (IBM)</h4>
                        <p>
                            <b>Ice Castle</b><br/>
                            I created Software Defined Networking for Virtual Environments, and worked with Open vSwitch to meet IBM's needs for Ice Castle.
                            <br/><br/>
                            <b>VSAE</b><br/>
                            I was the lead developer for the Virtual Server Activation Engine team. We worked to startup virtual servers automatically, as the need arose. We used Java as the main language.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Graduation</h3>
                        <h4 className="vertical-timeline-element-subtitle">Iowa State University</h4>
                        <p>
                            Bachelors degree in Computer Science
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default WorkExperience;