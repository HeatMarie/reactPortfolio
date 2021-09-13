import React from 'react';
import '../../styles/Resume.css';
import {
    Box, 
    Container,
    List,
    ListItem,

    
    } from '@material-ui/core/';

    export default function Skills(){
        return (
            <Container style={{
                backgroundColor: '#333',
                color: 'white',
                marginTop: '60px',
                width: '90%',

            }}>
            <Box>
                <h2 style={{
                    display: 'flex',
                    justifyContent:'center',
                    paddingTop:'32px',
                }}>Skills</h2>
            </Box>
            <Container className="skillsContainer">
            <Box className="skillsBox">
                <h4 style={{
                    paddingTop: '48px'
                }}>Back-end</h4>
                <List>
                    <ListItem>
                        Node.js
                    </ListItem>
                    <ListItem>
                        Express.js
                    </ListItem>
                    <ListItem>
                        Javascript
                    </ListItem>
                    <ListItem>
                        APIs
                    </ListItem>
                </List>
            </Box>
            <Box className="skillsBox"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            >
                <h4>Database</h4>
                <List>
                    <ListItem>
                        MySQL
                    </ListItem>
                    <ListItem>
                        MongoDB
                    </ListItem>
                </List>
            </Box>
            <Box className="skillsBox">
                <h4>Front-End</h4>
                <List>
                    <ListItem>
                        React.js
                    </ListItem>
                    <ListItem>
                        Material Ui
                    </ListItem>
                    <ListItem>
                        Bootstrap
                    </ListItem>
                    <ListItem>
                        Responsive Design
                    </ListItem>
                    <ListItem>
                        CSS
                    </ListItem>
                    <ListItem>
                        HTML5
                    </ListItem>
                </List>
            </Box>
            </Container>
        </Container>  
        )
    }