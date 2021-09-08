import React, {useState} from 'react';


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
        if (!validateEmail(email) || !firstName || !message) {
            setErorrMessage(`Please enter a valid email, first name, or message`);
        };
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (

        <div>
            <form className="form">
                <input
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={lastName}
                    name="lakeName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Please enter your message here."
                />
                <button type="button" onClick={handleFormSubmit}>
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