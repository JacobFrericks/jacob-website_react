import React, {Component} from 'react';
import './Portfolio.scss';

// images for project modals
//// aca_eagles
import aca_eagles_banner from "../img/portfolio/aca_eagles/aca_eagles.png";
import aca_eagles_splash_screen from "../img/portfolio/aca_eagles/splash_screen.png";
import aca_eagles_news_feed from "../img/portfolio/aca_eagles/news_feed.png";
import aca_eagles_announcements from "../img/portfolio/aca_eagles/announcements.png";
import aca_eagles_calendar from "../img/portfolio/aca_eagles/calendar.png";
import aca_eagles_about_us from "../img/portfolio/aca_eagles/about_us.png";
//// Cassie Website
import cassie_banner from "../img/portfolio/cassie_tutor/ad_banner.png";
import cassie_front from "../img/portfolio/cassie_tutor/main_page.png";
import cassie_contact_me from "../img/portfolio/cassie_tutor/contact_me.png";
import Project from "./Project";

// Info for modals
const ACA_EAGLES_DESCRIPTION = 'This is an application (Android/iOS) for a local private school. It gives users direct access to the most recent news, announcements, events, and general information about the school. It also allows for weather push notifications.';
const CASSIES_DESCRIPTION = 'This is a website I made for my wife when she was looking for tutoring jobs. She was able to get information from several people based on the website.';

let Scroll   = require('react-scroll');

type MyProps = {};
type MyState = { currentModal: string };

class Portfolio extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: ""
        };
    }

    render() {
        let Element  = Scroll.Element;

        return (
            <section className="projects" id="portfolio">
                <Element name="myScrollToElement"/>
                <div className='title'>Projects</div>
                <div className='projectGrid'>
                    <Project
                        modalKey="ACA_MODAL"
                        projectTitle="ACA Eagles"
                        projectSubtitle="A private school's mobile app"
                        projectDescription={ACA_EAGLES_DESCRIPTION}
                        projectLanguage="Flutter"
                        projectLink="https://apps.apple.com/us/app/aca-eagles/id1399920289"
                        images={[<img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>,
                            <img className='projectModalImage' src={aca_eagles_splash_screen} alt='ACA Eagles'/>,
                            <img className='projectModalImage' src={aca_eagles_calendar} alt='ACA Eagles'/>,
                            <img className='projectModalImage' src={aca_eagles_news_feed} alt='ACA Eagles'/>,
                            <img className='projectModalImage' src={aca_eagles_announcements} alt='ACA Eagles'/>,
                            <img className='projectModalImage' src={aca_eagles_about_us} alt='ACA Eagles'/>
                        ]}
                    />
                    <Project
                        modalKey="CASS_MODAL"
                        projectTitle="Cassie's Tutoring"
                        projectSubtitle="All you need in one place"
                        projectDescription={CASSIES_DESCRIPTION}
                        projectLanguage="ReactJs"
                        projectLink="https://cassiefrericks.com"
                        images={[
                            <img className='project' src={cassie_banner} alt='Cassies Tutoring'/>,
                            <img className='projectModalImage' src={cassie_front} alt='Cassies Tutoring'/>,
                            <img className='projectModalImage' src={cassie_contact_me} alt='Cassies Tutoring'/>
                            ]}
                    />
                </div>

            </section>

    );
    }
}

export default Portfolio;