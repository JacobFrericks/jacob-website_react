import React from 'react';
import backgroundImage from '../img/banner.png'
import { Jumbotron, Button, Col, Row, Container} from 'reactstrap';
import styles from './BrandBanner.module.css'

const divStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: 'url(' + backgroundImage + ')'
};

const NavbarScroller = () => {

    let jumbotron = {
        marginLeft: "auto",
        marginRight: "auto",
        background: "url(" + backgroundImage + ") center",
        maxWidth: "500px",
        width: "100%",
        height: "75vh",
        backgroundSize: "cover",
        paddingTop: "55vh",
    };

    return (
        <div style={{width: "100%", height: "75vh", backgroundColor: "black"}}>
            <Jumbotron style={jumbotron} className="text-center" >
                <Container className={styles.container} fluid>
                    <div className={styles.centerContent}>
                        <h1 className="display-4 text-center text-white margin-top-xl margin-bottom-xl" color="white">
                            Jacob Frericks
                        </h1>
                        <span className={styles.skills}>
                            Backend - Cloud - Containers
                        </span>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default NavbarScroller;