import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, 
    Link, 
    Container,
    Fab,
    Paper,
    useScrollTrigger,
    Zoom,
    List,
    ListItem,
    ListSubheader,
    ListItemIcon,
    ListItemText,
    Toolbar,

    } from '@material-ui/core/';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Skills from './ResumeComponents/Skills'
import ResumeProjects from './ResumeComponents/ResumeProjects';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../styles/Resume.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 50,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const useStyles1 = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));


export default function Resume(props) {
    const classes = useStyles1();
 

  return (

    <React.Fragment>

      <Container>
          <h2 className="resume">Resume</h2>
      </Container>
      <Toolbar id="back-to-top-anchor" />
      <Container className="row">
        <Box my={2}>
        <Paper elevation={22}>
            <Container className="row">
                <Box         
                display="flex"
                flexdirection="row"
                alignItems=" center"
                justifyContent= "space-around"
                >
                    <Box 
                    display="flex"
                    alignContent= "stretch"
                    justifyContent="space-around"
                    >
                        <Box className="headerBox" >
                            <h2>
                                Heather Bjoin
                            </h2>
                            <br></br>
                            <p>
                                Minneapolis, MN 55403
                            </p>
 
                        </Box>                    
                    </Box>
                <Box className="headerBox" >
                    <List
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Links
                        </ListSubheader>
                        }
                        className={classes.root}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
            
                            <Link className="links" href="https://github.com/HeatMarie" target="_blank">
                                <ListItemText primary="Github" />
                            </Link>
                        </ListItem>
                        
                        <ListItem>
                            <ListItemIcon>
                            <LinkedInIcon />
                            </ListItemIcon>
                            <Link className="links" href="https://www.linkedin.com/in/heather-bjoin-bb833761/"><ListItemText primary="LinkedIn" /></Link>
                        </ListItem>


                        <ListItem>
                            <ListItemIcon>
                            <MailOutlineIcon />
                            </ListItemIcon>
                            <Link className="links" href="mailto:h.m.bjoin@gmail.com"><ListItemText primary="Email" /></Link>
                        </ListItem>
                    </List>
                </Box>
                </Box>
            </Container> 
            <Container>
            <Box >
                <p className="introBox">
                    “Never forget how much you enjoy coding.” Those were words expressed to me from a client as I finished cutting his hair after a long talk about my experience in the Coding Bootcamp at the U of M. I enjoy the challenges given with each project and each new technology I have learned. I find them engaging and fulfilling, even more so when I have to struggle to get the final result. My ideal work environment would be a place where I get utilizing my full stack skills, working from the UI to the server. I would find greater value in a workplace where there are other developers who share my enthusiasm and have a desire to continue to learn. "
                </p>
            </Box>
        </Container>
        <ResumeProjects />
        <Skills />
        </Paper>
        </Box>
    </Container>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}