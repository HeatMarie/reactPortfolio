import React from 'react';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import '../../styles/Resume.css';
import {
    Box, 
    Link, 
    Container,
    Button,
    } from '@material-ui/core/';

    export default function ResumeProjects(){
        return(
            <Container>
            <Box className="projects">
                <h2 className="project-header">Projects</h2>

                <Box>
                    <Box className="projectBox">
                    <h3>Poggers-POG(Plan on Gaming)</h3>
                    <p>Two weeks</p>
                    <p>Poggers-POG is an app that allows user to sign into an account and add game titles and tasks. This was a full stack group project that utilized Handlebar templates, Express.js, Sequelize, MySQL, and Heroku.</p>
                    </Box>
                    <Box
                    display="flex"
                    justifyContent="space-around"
                    alignContent="stretch"
                    >
                    <Button
                    startIcon={<LanguageSharpIcon />}
                    > 
                    <Link                    
                    href="https://poggers-pog.herokuapp.com/" target="_blank">Live URL</Link>
                    </Button>

                    <Button
                    startIcon={<GitHubIcon />}
                    > 
                    <Link href="https://github.com/HeatMarie/poggers">GitHub Repo</Link>
                    </Button>
                    </Box>
                </Box>


                <Box>
                    <Box className="projectBox">
                    <h3>Blitz and Chaos (An Interactive Story</h3>
                    <p>Two weeks</p>
                    <p>Blitz and Chaos is an interactive story app that allows the reader to dive further into a story by making their own choices. This app used APIs, JavaScript, CSS, and HTML5 to give the user the experience of an Interactive Story</p>
                    </Box>
                    <Box
                    display="flex"
                    justifyContent="space-around"
                    alignContent="stretch"
                    >
                    <Button
                    startIcon={<LanguageSharpIcon />}
                    > 
                    <Link                    
                    href="https://heatmarie.github.io/BlitzandChaos/" target="_blank">Live URL</Link>
                    </Button>

                    <Button
                    startIcon={<GitHubIcon />}
                    > 
                    <Link href="https://github.com/HeatMarie/BlitzandChaos">GitHub Repo</Link>
                    </Button>
                    </Box>
                </Box>

                <Box>
                    <Box className="projectBox">
                    <h3>The Tech Blog</h3>
                    <p>Two weeks</p>
                    <p>This fun, pesky project was one to put all the skills to the test. The project implemented Handlebar templates, Ex- press.js, Sequelize, MySQL, and Heroku to truly create a full stack app. </p>
                    </Box>
                    <Box
                    display="flex"
                    justifyContent="space-around"
                    alignContent="stretch"
                    >
                    <Button
                    startIcon={<LanguageSharpIcon />}
                    > 
                    <Link                    
                    href="https://heats-tech-blog.herokuapp.com/" target="_blank">Live URL</Link>
                    </Button>

                    <Button
                    startIcon={<GitHubIcon />}
                    > 
                    <Link href="https://github.com/HeatMarie/techBlog">GitHub Repo</Link>
                    </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
        )

    }