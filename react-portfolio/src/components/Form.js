import React, { useState, useRef } from 'react'
import { Typography, Button, Container, IconButton, Link} from '@material-ui/core'

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { validateEmail } from '../utils/helpers';
import GitHubIcon from '@material-ui/icons/GitHub';
import SvgIcon from '@material-ui/core/SvgIcon';
import emailjs from 'emailjs-com';

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

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9ncuc1', 'template_julz5pc', formRef.current, 'user_SSCp2Ltnckp7WJ06JAVTW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
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
  };


  return (
    <Container>
      <Typography
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom>
      </Typography>

      <form noValidate autoComplete="off" onSubmit={sendEmail} ref={formRef}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          name="name"
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
          name="email"
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
          name="message"
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
        onClick={sendEmail}
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