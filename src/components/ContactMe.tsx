import React from 'react';
// import styles from "./ContactMe.module.css";
// import LinkedIn from '@material-ui/icons/LinkedIn';
// import GitHub from '@material-ui/icons/GitHub';
// import Facebook from '@material-ui/icons/Facebook';
// import Twitter from '@material-ui/icons/Twitter';
// import IconButton from '@material-ui/core/IconButton';
import makeStyles from "@material-ui/core/styles/makeStyles";
import './ContactMe.scss';

let hover = { backgroundColor: "#fff", color: "#18bc9c", border: "solid 2px #fff" };
// let iconSize = { fontSize: '100px' };

// const useStyles = makeStyles(theme => ({
//     linkedin: {
//         "&:hover, &.Mui-focusVisible": hover,
//         color: "#4875B4",
//     },
//     github: {
//         "&:hover, &.Mui-focusVisible": hover,
//         color: "#000"
//     },
//     facebook: {
//         "&:hover, &.Mui-focusVisible": hover,
//         color: "#3B5998"
//     },
//     twitter: {
//         "&:hover, &.Mui-focusVisible": hover,
//         color: "#33CCFF"
//     },
// }));

const ContactMe = () => {
    return (
        <div className='contactme'>
            <div className="downTriangle"/>
            <div className="contactTitle">CONTACT</div>
            <div className='question'>Have a question or want to work together?</div>
            <form className='form'>
                <input className='formInput' placeholder="Name" type="text" name="name" />
                <input className='formInput' placeholder="Enter email" name="email" />
                <textarea className='formInput' placeholder="Your Message" name="message" />
                <div className='submitButton'><input className='contactButton' type="submit" value="SUBMIT"/></div>
            </form>
        </div>
    );
};

export default ContactMe;