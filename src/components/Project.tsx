import React, {Component, ReactNode} from 'react';
import './Project.scss';
import Modals from './PortfolioModalTemplate';

type MyProps = {
    modalKey: string,
    projectTitle: string,
    projectSubtitle: string,
    projectDescription: string,
    projectLanguage: string,
    projectLink: string,
    images: Array<ReactNode>
};
type MyState = {currentModal: string, hover: number};

class Project extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: "",
            hover: 0
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
            currentModal: "",
            hover: 0
        });
    }

    onMouseover (e) {
        this.setState({hover: 1})
    }
    onMouseout (e) {
        this.setState({hover: 0})
    }
    render() {
        const { currentModal, hover} = this.state;
        const {
            projectTitle,
            projectSubtitle,
            projectDescription,
            projectLanguage,
            projectLink,
            modalKey,
            images} = this.props

        return <div>
            {hover ?
                <div className="projectInfo"
                     onMouseEnter={this.onMouseover.bind(this)}
                     onMouseLeave={this.onMouseout.bind(this)}>
                    <div className='projectTitle'>{projectTitle}</div>
                    <div className='projectLanguage'>{projectLanguage}</div>
                    <button className="projectButton"
                            onClick={this.toggleModal(modalKey).bind(this)}>LEARN MORE
                    </button>
                </div>
                : <div className="project"
                       onMouseEnter={this.onMouseover.bind(this)}
                       onMouseLeave={this.onMouseout.bind(this)}>{images[0]}</div>
            }
            <Modals
                isOpen={currentModal === modalKey}
                onRequestClose={this.handleModalCloseRequest}
                askToClose={this.toggleModal(modalKey)}
                images={images.slice(1)}
                title={projectTitle}
                subtitle={projectSubtitle}
                description={projectDescription}
                link={projectLink}
            />
        </div>
    }
}

export default Project;