import React, {Component} from 'react';
import {ProjectObj} from "../objects/projectObj";
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
const EMAIL2PDF_DESCRIPTION = 'This project will save a PDF of specific emails tagged with a label and save them to Google Drive using Googles AppScript language. This helps save digital receipts sent via email.';
const MIDIOWAVENDING_DESCRIPTION = 'This is a WIP website that I am creating for a friend. It will be a website that advertises his new vending machine business.';
const PLEXHEALTH_DESCRIPTION = 'This is a python script that is set to run every 5 minutes on my Plex Server. If it does not respond, this script will restart the plex app.';

const all_projects = [
    {
        id: "ACA_MODAL",
        title: "ACA Eagles",
        subtitle: "A private school's mobile app",
        description: ACA_EAGLES_DESCRIPTION,
        language: "Flutter",
        link: "https://apps.apple.com/us/app/aca-eagles/id1399920289",
        images: [
            <img className='project' src={aca_eagles_banner} alt='ACA Eagles'/>,
            <img className='projectModalImage' src={aca_eagles_splash_screen} alt='ACA Eagles'/>,
            <img className='projectModalImage' src={aca_eagles_calendar} alt='ACA Eagles'/>,
            <img className='projectModalImage' src={aca_eagles_news_feed} alt='ACA Eagles'/>,
            <img className='projectModalImage' src={aca_eagles_announcements} alt='ACA Eagles'/>,
            <img className='projectModalImage' src={aca_eagles_about_us} alt='ACA Eagles'/>
        ],
    },
    {
        id: "CASS_MODAL",
        title: "Cassie's Tutoring",
        subtitle: "All you need in one place",
        description: CASSIES_DESCRIPTION,
        language: "ReactJs",
        link: "https://cassiefrericks.com",
        images: [
            <img className='project' src={cassie_banner} alt='Cassies Tutoring'/>,
            <img className='projectModalImage' src={cassie_front} alt='Cassies Tutoring'/>,
            <img className='projectModalImage' src={cassie_contact_me} alt='Cassies Tutoring'/>
        ],
    },
    {
        id: "MIDIOWAVENDING_MODAL",
        title: "Mid Iowa Vending",
        subtitle: "Experience the highest quality in vending management service!",
        description: MIDIOWAVENDING_DESCRIPTION,
        language: "Flutter",
        link: "",
        images: [
            <img className='projectModalImage' src={midiowavending_quality} alt='MidIowaVending'/>,
            <img className='projectModalImage' src={midiowavending_quality} alt='MidIowaVending'/>,
            <img className='projectModalImage' src={midiowavending_products} alt='MidIowaVending'/>,
            <img className='projectModalImage' src={midiowavending_services} alt='MidIowaVending'/>,
            <img className='projectModalImage' src={midiowavending_contactus} alt='MidIowaVending'/>,
        ],
    },
    {
        id: "EMAIL2PDF_MODAL",
        title: "Email to PDF",
        subtitle: "Automatically saves certain emails as a PDF",
        description: EMAIL2PDF_DESCRIPTION,
        language: "AppScript",
        link: "https://github.com/JacobFrericks/GmailToPdf",
        images: [
            <img className='projectModalImage' src={gmail2pdf_banner} alt='Gmail2PDF'/>,
            <img className='projectModalImage' src={gmail2pdf_script} alt='Gmail2PDF'/>
        ],
    },
    {
        id: "PLEXHEALTH_MODAL",
        title: "Plex Health Check",
        subtitle: "Verifies if the Plex Media Server is responding",
        description: PLEXHEALTH_DESCRIPTION,
        language: "Python",
        link: "https://github.com/JacobFrericks/plex-healthcheck",
        images: [
            <img className='projectModalImage' src={plexHealth_banner} alt='PlexHealth'/>,
            <img className='projectModalImage' src={plexHealth_banner} alt='PlexHealth'/>
        ],
    },
]

let Scroll   = require('react-scroll');

type MyProps = {};
type MyState = { currentModal: string, filter: string, projects: ProjectObj[], selectedFilter: string };

class Portfolio extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: "",
            filter: "",
            projects: all_projects,
            selectedFilter: "All"
        };
    }

    get_unique_filters() {
        let all_possible_filters = all_projects.map( function( item ){
            return item.language;
        })
        let unique = Array.from(new Set(all_possible_filters));
        return ["All"].concat(unique);
    }

    render() {
        let Element  = Scroll.Element;
        const { filter, projects, selectedFilter } = this.state;

        let all_unique_filters = this.get_unique_filters();

        const filteredData = projects.filter(item => {
            return item.language.includes(filter)
        });

        return (
            <section className="projects" id="portfolio">
                <Element name="myScrollToElement"/>
                <div className='title'>Projects</div>
                {all_unique_filters.map(filter_name => (
                    <button className={selectedFilter === filter_name ? "selectedFilterButton" : "filterButton"}
                            onClick={this.filter(filter_name === "All" ? "" : filter_name).bind(this)}>
                        {filter_name}
                    </button>
                ))}
                <div className='projectGrid'>
                    {filteredData.map(project => (
                        <Project
                            modalKey={project.id}
                            projectTitle={project.title}
                            projectSubtitle={project.subtitle}
                            projectDescription={project.description}
                            projectLanguage={project.language}
                            projectLink={project.link}
                            images={project.images}
                        />
                    ))}
                </div>
            </section>
        );
    }

    filter = type => event => {
        this.setState({ filter: type , selectedFilter: event.target.innerText})
    }
}

export default Portfolio;