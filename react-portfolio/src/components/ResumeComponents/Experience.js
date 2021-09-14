import React from 'react';
import '../../styles/Resume.css';
import {
    Box,
    Container,
    List,
    ListItem
} from '@material-ui/core';

export default function Experience(){
    return(
        <Container className="experience-container" style={{
            width: '90%',
        }}>
            <h2>Experience</h2>
            <Box>
                <List>
                    <ListItem className="experience-box">
                        <Box className="experience-box">
                            <h4>GREAT CLIPS | WINDJAMMERS</h4>
                            <h5>Cosmetologist</h5>
                            <p>Minneapolis MN</p>
                            <p>June 2019 - present</p>
                        </Box>
                        <Box>
                            <p>As a cosmetologist at Great Clips I ensure that each customer receives a quality experience and a quality haircut. It’s all about great customer service, and being able to thoroughly communicate with every customer to ensure their satisfaction. In addition to helping customers, it’s also essential to keep a clean salon. Together the staff works as a team, to make sure that our salon meets and exceeds the states requirements for cleanliness by following the sanitation guidelines.</p>
                        </Box>
                    </ListItem>
                    <ListItem className="experience-box">
                        <Box className="experience-box">
                            <h4>GREAT CLIPS | PB5</h4>
                            <h5>Cosmetologist / Manager</h5>
                            <p>Galesburg IL | Macomb IL</p>
                            <p>Aug. 2011 - Feb. 2017 | Oct. 2017 - June 2019</p>
                        </Box>
                        <Box>
                            <p>While working for PB5 (Great Clips) I was a hair stylist, and a manager. As manager, my tasks went beyond that of a stylist. I motivated my team to stay on task, made weekly schedules for the stylist, haircut training, and ensured customer satisfaction. </p>
                        </Box>
                    </ListItem>
                    <ListItem className="experience-box">
                        <Box className="experience-box">
                            <h4>REGISTER-MAIL</h4>
                            <h5>Intern Reporter</h5>
                            <p>Galesburg IL</p>
                            <p>March - May 2019</p>
                        </Box>
                        <Box>
                            <p>As an intern at the Register-Mail I was able to get involved and write articles on several community events. Towards the end of my internship I had my own column that focused on good deeds that happened within the community. </p>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Container>
    )
}