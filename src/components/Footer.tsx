import React, {Component} from 'react';

import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div className="icon-wrap flex row">
                        <a href="https://www.linkedin.com/in/jacobfrericks/">
                            <div className="flex icon" id="icon-2">
                                <FontAwesomeIcon className='socialIcon' icon={faLinkedinIn}/>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/the.jacob.frericks">
                            <div className="flex icon" id="icon-3">
                                <FontAwesomeIcon className='socialIcon' icon={faFacebookF}/>
                            </div>
                        </a>
                        <a href="https://github.com/JacobFrericks/">
                            <div className="flex icon" id="icon-4">
                                <FontAwesomeIcon className='socialIcon' icon={faGithub}/>
                            </div>
                        </a>
                        <a href="https://twitter.com/JacTheDev">
                            <div className="flex icon" id="icon-5">
                                <FontAwesomeIcon className='socialIcon' icon={faTwitter}/>
                            </div>
                        </a>
                    </div>
                    <div className="info-box">
                        <div className="footnote">
                            Jacob Frericks <span className="highlight">&copy;{new Date().getFullYear()}</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;