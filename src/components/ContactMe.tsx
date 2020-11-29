import React, {Component} from 'react';
import './ContactMe.scss';

const subject = "Hello! I would like to work with you!";
const toEmail = "jacob.frericks+website@gmail.com"

type MyProps = {};
type MyState = { name: string, body: string };

class ContactMe extends Component<MyProps, MyState> {

    constructor(props) {
        super(props)
        this.state = { name: '', body: '' }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }

    handleChangeBody(event) {
        this.setState({ body: event.target.value })
    }

    handleSubmit(event) {
        let encodedBody = encodeURIComponent(`${this.state.body}\n\nSincerely,\n${this.state.name}`);
        let encodedSubject = encodeURIComponent(subject);
        window.location.href=`mailto:${toEmail}?subject=${encodedSubject}&body=${encodedBody}`
    }

    render() {
        return (
            <div className='contactme'>
                <div className="downTriangle"/>
                <div className="contactTitle">CONTACT</div>
                <div className='question'>Have a question or want to work together?</div>
                <form className='form' action="mailto:jacob.frericks+website@gmail.com" method="POST" encType="text/plain">
                    <input
                        className='formInput'
                        onChange={this.handleChangeName}
                        placeholder="Name"
                        type="text"
                        name="name"/>
                    <textarea
                        className='formInput'
                        onChange={this.handleChangeBody}
                        placeholder="Your Message"
                        name="message"/>
                    <div className='submitButton'>
                        <button
                            className='contactButton'
                            type="submit"
                            onClick={this.handleSubmit}>
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactMe;