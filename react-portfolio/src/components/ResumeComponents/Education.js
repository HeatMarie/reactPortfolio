import React from 'react';
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


    // Import images
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
    

export default function Education() {
    const classes = useStyles1()
    return(
<Container className="row" style={{
    backgroundColor:'#333',
    color: 'white',
    width: '90%',
    marginTop: "50px",
    marginBottom: "50px"
}}>
    <h2 style={{
        marginTop: "50px"
    }}>Education</h2>
                <Box         
                display="flex"
                flexdirection="row"
                alignItems=" center"
                justifyContent= "space-around"
                marginBottom="50px"
                >
                    
                    <Box 
                    display="flex"
                    alignContent= "stretch"
                    justifyContent="space-around"
                    >
                        <Box className="headerBox" >
                            <h3>
                                Univerity of Minnesota
                            </h3>
                            <br></br>
                            <p>
                                Full Stack Web Development Certificate 
                            </p>
                            <p>
                                Oct 2021
                            </p>
 
                        </Box>                    
                    </Box>
 
                <Box 
                    display="flex"
                    alignContent= "stretch"
                    justifyContent="space-around"
                    >
                        <Box className="headerBox" >
                            <h3>
                                Univerity of Minnesota
                            </h3>
                            <br></br>
                            <p>
                                Full Stack Web Development Certificate 
                            </p>
                            <p>
                                Oct 2021
                            </p>
 
                        </Box>                    
                    </Box>
 
                </Box>
            </Container> 
  );
}
