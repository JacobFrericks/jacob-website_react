import React, {Component} from 'react';
import './Portfolio.scss';
import ACAMODAL from '../modals/aca_modal';
import aca_eagles_banner from "../img/portfolio/aca_eagles.png";
let Scroll   = require('react-scroll');

const ACA_MODAL = 'aca_modal';

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

                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>LEARN MORE</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>Open Modal B</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>Open Modal B</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                </div>

            </section>

    );
    }
}

export default Portfolio;