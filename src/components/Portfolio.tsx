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
//// Gmail2PDF
import gmail2pdf_banner from "../img/portfolio/gmail2pdf/ad_banner.png";
import gmail2pdf_script from "../img/portfolio/gmail2pdf/gmail2pdf.png";
/// MidIowaVending
import midiowavending_quality from "../img/portfolio/midiowavending/quality_vending.png"
import midiowavending_products from "../img/portfolio/midiowavending/vending_products.png"
import midiowavending_services from "../img/portfolio/midiowavending/vending_services.png"
import midiowavending_contactus from "../img/portfolio/midiowavending/contact_us.png"
/// Plex Health
import plexHealth_banner from "../img/portfolio/plex_health/plex_health.png"

// Info for modals
const ACA_EAGLES_DESCRIPTION = 'This is an application (Android/iOS) for a local private school. It gives users direct access to the most recent news, announcements, events, and general information about the school. It also allows for weather push notifications.';
const CASSIES_DESCRIPTION = 'This is a website I made for my wife when she was looking for tutoring jobs. She was able to get information from several people based on the website.';
const EMAIL2PDF_DESCRIPTION = 'This project will save a PDF of specific emails tagged with a label and save them to Google Drive. This helps save digital receipts sent via email.';
const MIDIOWAVENDING_DESCRIPTION = 'This is a WIP website that I am creating for a friend. It will be a website that advertises his new vending machine business.';
const PLEXHEALTH_DESCRIPTION = 'This is a python script that is set to run every 5 minutes on my Plex Server. If it does not respond, this script will restart the plex app.';

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
                    <Project
                        modalKey="MIDIOWAVENDING_MODAL"
                        projectTitle="Mid Iowa Vending"
                        projectSubtitle="Experience the highest quality in vending management service!"
                        projectDescription={MIDIOWAVENDING_DESCRIPTION}
                        projectLanguage="Flutter"
                        projectLink=""
                        images={[
                            <img className='projectModalImage' src={midiowavending_quality} alt='MidIowaVending'/>,
                            <img className='projectModalImage' src={midiowavending_quality} alt='MidIowaVending'/>,
                            <img className='projectModalImage' src={midiowavending_products} alt='MidIowaVending'/>,
                            <img className='projectModalImage' src={midiowavending_services} alt='MidIowaVending'/>,
                            <img className='projectModalImage' src={midiowavending_contactus} alt='MidIowaVending'/>,

                        ]}
                    />
                    <Project
                        modalKey="EMAIL2PDF_MODAL"
                        projectTitle="Email to PDF"
                        projectSubtitle="Automatically saves certain emails as a PDF"
                        projectDescription={EMAIL2PDF_DESCRIPTION}
                        projectLanguage="Google AppScript"
                        projectLink="https://github.com/JacobFrericks/GmailToPdf"
                        images={[
                            <img className='projectModalImage' src={gmail2pdf_banner} alt='Gmail2PDF'/>,
                            <img className='projectModalImage' src={gmail2pdf_script} alt='Gmail2PDF'/>
                        ]}
                    />
                    <Project
                        modalKey="PLEXHEALTH_MODAL"
                        projectTitle="Plex Health Check"
                        projectSubtitle="Verifies if the Plex Media Server is responding"
                        projectDescription={PLEXHEALTH_DESCRIPTION}
                        projectLanguage="Python"
                        projectLink="https://github.com/JacobFrericks/plex-healthcheck"
                        images={[
                            <img className='projectModalImage' src={plexHealth_banner} alt='PlexHealth'/>,
                            <img className='projectModalImage' src={plexHealth_banner} alt='PlexHealth'/>
                        ]}
                    />
                </div>

            </section>

    );
    }
}

export default Portfolio;