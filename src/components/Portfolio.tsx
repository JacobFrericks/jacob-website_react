import React, {Component} from 'react';
import './Portfolio.scss';
import ACAMODAL from '../modals/aca_modal';
import aca_eagles_banner from "../img/portfolio/aca_eagles.png";
let Scroll   = require('react-scroll');

const ACA_MODAL = 'aca_modal';

type MyProps = {};
type MyState = { currentModal: string };

class Portfolio extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: ""
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
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({
            ...this.state,
            currentModal: ""
        });
    }

    handleOnAfterOpenModal = () => {
        // when ready, we can access the available refs.
        // this.heading && (this.heading.style.color = '#F00');
    }

    render() {
        const { currentModal } = this.state;
        let Element  = Scroll.Element;

        return (
            <section className="projects" id="portfolio">


                <Element name="myScrollToElement"/>
                <div className='title'>Projects</div>
                <div className='projectGrid'>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>LEARN MORE</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>Open Modal B</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>Open Modal B</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                    <div><img className='project' src={aca_eagles_banner} alt='ACA Eagles'/><br/>
                        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(ACA_MODAL)}>Open Modal B</button>*/}
                        <ACAMODAL
                            isOpen={currentModal === ACA_MODAL}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            onRequestClose={this.handleModalCloseRequest}
                            askToClose={this.toggleModal(ACA_MODAL)} />
                    </div>
                </div>

            </section>

    );
    }
}

export default Portfolio;