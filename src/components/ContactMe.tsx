import React, {Component} from 'react';
import './ContactMe.scss';

class ContactMe extends Component {

    render() {
        return (
            <div className='contactme'>
                <div className="downTriangle"/>
                <div className="contactTitle">CONTACT</div>
                <div className='question'>Have a question or want to work together?</div>
                <form className='form'>
                    <input className='formInput' placeholder="Name" type="text" name="name"/>
                    <input className='formInput' placeholder="Enter email" name="email"/>
                    <textarea className='formInput' placeholder="Your Message" name="message"/>
                    <div className='submitButton'><input className='contactButton' type="submit" value="SUBMIT"/></div>
                </form>
            </div>
        );
    }
}

export default ContactMe;