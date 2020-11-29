import React, { CSSProperties } from 'react';
import './modals.scss';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    width: '7vh',
    height: '7vh',
    cursor: 'pointer',
    bottom: 0,
    backgroundColor: 'rgba(192,192,192,0.25)',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    overflow: 'hidden',
    outline: 'none',
    color: "white"
};

export default props => {
    const {
        isOpen,
        askToClose,
        onRequestClose,
        images,
        title,
        subtitle,
        description,
        link
    } = props;

    return (
        <Modal
            id="test"
            contentLabel="modalA"
            closeTimeoutMS={150}
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <Carousel
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                            <FontAwesomeIcon icon={faChevronLeft} className='fontawesome'/>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                            <FontAwesomeIcon icon={faChevronRight} className='fontawesome'/>
                        </button>
                    )
                }>
                {images.map(image => {
                    return(
                        <div>
                            {image}
                        </div>
                    )
                })}
            </Carousel>
            <div className="modalTitle">{title}</div>
            <div className="modalSubtitle">{subtitle}</div>
            <hr className="modalTitleSeparator"/>
            <div className="modalDescription">{description}</div>
            <button className="modalViewAppButton">
                <a href={link}>View App</a>
            </button>
            <button  className="modalCloseButton" onClick={askToClose}>X</button>
        </Modal>
    );
}