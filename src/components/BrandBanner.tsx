import React from 'react';
import backgroundImage from '../img/banner2.png'
import { Jumbotron, Container} from 'reactstrap';
import styles from './BrandBanner.module.css'

const NavbarScroller = () => {

    let jumbotron = {
        marginLeft: "auto",
        marginRight: "auto",
        background: "url(" + backgroundImage + ") center",
        maxWidth: "500px",
        width: "100%",
        height: "50vh",
        backgroundSize: "cover",
        paddingTop: "45vh",
    };

    return (
        <div style={{width: "100%", height: "70vh", backgroundColor: "black"}}>
            <Jumbotron style={jumbotron}>
                <Container className={styles.container} fluid>
                    <div className={styles.centerContent}>
                        <h1 className="display-4" color="white">
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