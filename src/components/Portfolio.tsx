import React, {Component} from 'react';
import './Portfolio.scss';
import Modals from './PortfolioModalTemplate';

// images for project modals
//// aca_eagles
import aca_eagles_banner from "../img/portfolio/aca_eagles/aca_eagles.png";
import aca_eagles_splash_screen from "../img/portfolio/aca_eagles/splash_screen.png";
import aca_eagles_news_feed from "../img/portfolio/aca_eagles/news_feed.png";
import aca_eagles_announcements from "../img/portfolio/aca_eagles/announcements.png";
import aca_eagles_calendar from "../img/portfolio/aca_eagles/calendar.png";
import aca_eagles_about_us from "../img/portfolio/aca_eagles/about_us.png";

// Info for modals
const ACA_MODAL = 'aca_modal';
const ACA_EAGLES_DESCRIPTION = 'This is an application (Android/iOS) for a local private school. It gives users direct access to the most recent news, announcements, events, and general information about the school. It also allows for weather push notifications.';

let Scroll   = require('react-scroll');

type MyProps = {};
type MyState = { currentModal: string, aca_hover: number };

class Portfolio extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: "",
            aca_hover: 0
        };
    }

    toggleModal = key => event => {
        event.preventDefault();
        if (this.state.currentModal) {
            this.handleModalCloseRequest();
            return;
        }

        this.setState({
            ...this.state,
            currentModal: key,
        });
    }

    handleModalCloseRequest = () => {
        this.setState({
            ...this.state,
            currentModal: ""
        });
    }

    onMouseover (e) {
        this.setState({aca_hover: 1})
    }
    onMouseout (e) {
        this.setState({aca_hover: 0})
    }

    render() {
        const { currentModal, aca_hover} = this.state;
        let Element  = Scroll.Element;

        return (
            <section className="projects" id="portfolio">
                <Element name="myScrollToElement"/>
                <div className='title'>Projects</div>
                <div className='projectGrid'>
                    <div>
                        {aca_hover ?
                            <div className='projectInfo'
                                 onMouseEnter={this.onMouseover.bind(this)}
                                 onMouseLeave={this.onMouseout.bind(this)}>
                                <div className='projectTitle'>ACA Eagles App</div>
                                <div className='projectLanguage'>Flutter</div>
                                <button className="projectButton"
                                        onClick={this.toggleModal(ACA_MODAL).bind(this)}>LEARN MORE
                                </button>
                            </div>
                            : <img className='project'
                                 src={aca_eagles_banner}
                                 alt='ACA Eagles'
                                 onMouseEnter={this.onMouseover.bind(this)}
                                 onMouseLeave={this.onMouseout.bind(this)}/>
                        }
                        <Modals
                                isOpen={currentModal === ACA_MODAL}
                                onRequestClose={this.handleModalCloseRequest}
                                askToClose={this.toggleModal(ACA_MODAL)}
                                images={[
                                    <img className='projectModalImage' src={aca_eagles_splash_screen} alt='ACA Eagles'/>,
                                    <img className='projectModalImage' src={aca_eagles_calendar} alt='ACA Eagles'/>,
                                    <img className='projectModalImage' src={aca_eagles_news_feed} alt='ACA Eagles'/>,
                                    <img className='projectModalImage' src={aca_eagles_announcements} alt='ACA Eagles'/>,
                                    <img className='projectModalImage' src={aca_eagles_about_us} alt='ACA Eagles'/>
                                ]}
                                title="ACA Eagles"
                                subtitle="A private school's mobile app"
                                description={ACA_EAGLES_DESCRIPTION}
                                link="https://apps.apple.com/us/app/aca-eagles/id1399920289"
                        />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/></div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/></div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/></div>
                </div>

            </section>

    );
    }
}

export default Portfolio;