import React, {useState} from 'react';

import '../styles/Contact.css';


import { validateEmail } from '../utils/helpers';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErorrMessage] = useState('');

    const handleInputChange = (e) => {
        let target = e.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            } else if (inputType === 'firstName') {
            setFirstName(inputValue);
            } else if (inputType === 'lastName') {
            setLastName(inputValue);
            } else if (inputType === 'message') {
            setMessage(inputValue);
            }
        return;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErorrMessage(`Please enter a valid email, first name, or message`);
        };

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    const nameValidation = firstName => {
        if (!firstName) {
            return`First name is require!`;
        }
    }

    return (

        <div>
            <form className="form" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}>
                <input
                    className="contact-input"
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                    required
                />
                            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

                <input
                    className="contact-input"
                    value={lastName}
                    name="lakeName"
                    onChange={handleInputChange} required
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    className="contact-input"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    className="contact-input content-textarea"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Please enter your message here."
                />
                <button class="contact-btn" type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Form;