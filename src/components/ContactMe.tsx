import React from 'react';
import styles from "./ContactMe.module.css";
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from "@material-ui/core/styles/makeStyles";

let hover = { backgroundColor: "#fff", color: "#18bc9c", border: "solid 2px #fff" };
let iconSize = { fontSize: '100px' };

const useStyles = makeStyles(theme => ({
    linkedin: {
        "&:hover, &.Mui-focusVisible": hover,
        color: "#4875B4",
    },
    github: {
        "&:hover, &.Mui-focusVisible": hover,
        color: "#000"
    },
    facebook: {
        "&:hover, &.Mui-focusVisible": hover,
        color: "#3B5998"
    },
    twitter: {
        "&:hover, &.Mui-focusVisible": hover,
        color: "#33CCFF"
    },
}));

const ContactMe = () => {
    const classes = useStyles();

    return (
        <div className={styles.module}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className={styles.title}> CONTACT ME </div>
                    </div>

                    <div className="col-lg-3 centerBlock text-center">
                        <IconButton aria-label="Linkedin.com" className={classes.linkedin} onClick={() => window.open('https://www.linkedin.com/in/jacobfrericks')}>
                            <LinkedIn style={iconSize}/>
                        </IconButton>
                    </div>
                    <div className="col-lg-3 centerBlock text-center">
                        <IconButton aria-label="GitHub.com" className={classes.github} onClick={() => window.open('https://www.github.com/jacobfrericks')}>
                            <GitHub style={iconSize}/>
                        </IconButton>
                    </div>
                    <div className="col-lg-3 centerBlock text-center">
                        <IconButton aria-label="Linkedin.com" className={classes.facebook} onClick={() => window.open('https://www.facebook.com/the.jacob.frericks')}>
                            <Facebook style={iconSize}/>
                        </IconButton>
                    </div>
                    <div className="col-lg-3 centerBlock text-center">
                        <IconButton aria-label="Linkedin.com" className={classes.twitter} onClick={() => window.open('https://twitter.com/JacobFrericks_')}>
                            <Twitter style={iconSize}/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;