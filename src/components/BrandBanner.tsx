import React, {Component, MouseEvent} from 'react';
import './BrandBanner.scss'

let Scroll   = require('react-scroll');

class NavbarScroller extends Component {

    handleClick(event: MouseEvent) {

        // Somewhere else, even another file
        Scroll.scroller.scrollTo('myScrollToElement', {
            duration: 1000,
            smooth: true,
        })
    }

    render() {
        return (
            <div className="home">
                <div className="text">
                    Hello, I'm <span>Jacob Frericks</span>.
                    <br/>
                    <br/>
                    Cloud Security Engineer by day<br/><span>Software Engineer by night</span><br/>
                    <br/>
                    <br/>
                    <button onClick={this.handleClick}>View my work</button>
                </div>
            </div>
        );
    }
}

export default NavbarScroller;