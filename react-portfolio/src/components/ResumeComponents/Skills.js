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
                    paddingTop:'32px',
                }}>Skills</h2>
            </Box>
            <Container className="skillsContainer">
            <Box className="skillsBox">
                <List className='skills-list list1'>
                    <ListItem className='skill-list-item'>
                        Node.js
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        Express.js
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        Javascript
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        MySQL
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        MongoDB
                    </ListItem>
                </List>
            </Box>
            <Box className="skillsBox">
                <List className='skills-list list2'>
                    <ListItem className='skill-list-item'>
                        React.js
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        Material Ui
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        Bootstrap
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        Responsive Design
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        CSS
                    </ListItem>
                    <ListItem className='skill-list-item'>
                        HTML5
                    </ListItem>
                </List>
            </Box>
            </Container>
        </Container>  
        )
    }