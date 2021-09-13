// import React, {useState, useRef, useEffect} from 'react';

// import '../styles/Contact.css';

// import { Button, TextField, Collapse  } from '@material-ui/core';

// import { validateEmail } from '../utils/helpers';




//     function Form() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')
//     const [errorMessage, setErorrMessage] = useState('');
    

//     const handleInputChange = (e) => {
//         let target = e.target;
//         let inputType = target.name;
//         let inputValue = target.value;


//         switch(inputType) {
//             case 'email':
//                 return setEmail(inputValue);
//             case 'firstName':
//                 return setFirstName(inputValue);
//             case 'lastName':
//                 return setLastName(inputValue);
//             case 'message':
//                 return setMessage(inputValue);
//         }

//         if (inputType === 'email') {
//             setEmail(inputValue);
//             } else if (inputType === 'firstName') {
//             setFirstName(inputValue);
//             } else if (inputType === 'lastName') {
//             setLastName(inputValue);
//             } else if (inputType === 'message') {
//             setMessage(inputValue);
//             }
//         return;
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (!validateEmail(email)) {
//             setErorrMessage(`Please enter a valid email`);
//         } else if (!firstName) {
//             setErorrMessage(`First name is required`);
//         } else if (!lastName) {
//             setErorrMessage(`Last name is required`);
//         } else if (!message) {
//             setErorrMessage(`A message is required!`);
//         } 
//         ;

//         setFirstName('');
//         setLastName('');
//         setEmail('');
//         setMessage('');
//     };



//     return (

//         <div>
//             <form className="form" style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',

//             }}>
//                 <input
//                     className="contact-input"
//                     value={firstName}
//                     name="firstName"
//                     required onChange={this.handleChange}
//                     type="text"
//                     placeholder="First Name"
//                     required
//                 />
//                 {errorMessage && (
//                 <div>
//                     <p className="error-text">{errorMessage}</p>
//                 </div>
//                 )}

//                 <input
//                     className="contact-input"
//                     value={lastName}
//                     name="lakeName"
//                     onChange={handleInputChange} required
//                     type="text"
//                     placeholder="Last Name"
//                 />
//                 <input
//                     className="contact-input"
//                     value={email}
//                     name="email"
//                     onChange={handleInputChange}
//                     type="email"
//                     placeholder="email"
//                 />
//                 <textarea
//                     className="contact-input content-textarea"
//                     value={message}
//                     name="message"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Please enter your message here."
//                 />
//                 <button class="contact-btn" type="button" onClick={handleFormSubmit}>
//                     Submit
//                 </button>
//             </form>
//             {errorMessage && (
//                 <div>
//                     <p className="error-text">{errorMessage}</p>
//                 </div>
//             )}
//         </div>
//     )
// };
// export default Form;











import React, { useState } from 'react'
import { Typography, Button, Container, IconButton, Link} from '@material-ui/core'

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { validateEmail } from '../utils/helpers';
import GitHubIcon from '@material-ui/icons/GitHub';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }

})

export default function Create() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessageMessage, setErrorMessageMessage] = useState('')
  
  




  const handleNameBlur =() => {
    setNameError(false)
    setErrorMessageName('')
    if (name === ''){
      setNameError(true);
      setErrorMessageName('A name is required')
    }

  }

  const handleEmailBlur= () => {
    setEmailError(false)
    setErrorMessageEmail('')
    if (email === '' || !validateEmail(email)) {
      setEmailError(true);
      setErrorMessageEmail('Please enter a valid email')
    }
  }

  const handleMessageBlur = () => {
    setMessageError(false)
    setErrorMessageMessage('')
    if (message === '') {
    setMessageError(true);
    setErrorMessageMessage('A message is required')
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (name === ''){
      setNameError(true)
    };
    if (email === '' || !validateEmail(email)){
      setEmailError(true)
    };
    if (message === ''){
      setMessageError(true)
    };


    if (name && email && message) {
      console.log(name, email, message)
    }

    setName('');
    setEmail('');
    setMessage('');


  }

  return (
    <Container>
      <Typography
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom>
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          label="Name"
          value={name}
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={nameError}
          onBlur={handleNameBlur}
          helperText= {errorMessageName}
        />

          <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.field}
          label="Email"
          value={email}
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={emailError}
          onBlur={handleEmailBlur}
          helperText={errorMessageEmail}
        />

          <TextField
          onChange={(e) => setMessage(e.target.value)}
          className={classes.field}
          label="Message"
          variant="outlined"
          color="primary"
          value={message}
          multiline
          rows={4}
          fullWidth
          required
          error={messageError}
          onBlur={handleMessageBlur}
          helperText={errorMessageMessage}
        />

        <Button 
        onClick={handleSubmit}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
 

    </Container>
  )
}