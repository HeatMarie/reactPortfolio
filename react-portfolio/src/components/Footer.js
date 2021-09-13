import React from 'react'
import { Typography, Button, Container, IconButton, Link, createTheme, ThemeProvider} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { orange } from '@material-ui/core/colors';
import '../styles/Footer.css';




const Footer = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#bf360c"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
        <footer id="footer">

            <div style={{
            marginBottom: '20px',
            }}>
                <Link className="links" href="https://github.com/HeatMarie" target="_blank">
                <GitHubIcon style={{ fontSize: 45 }} color="primary"></GitHubIcon>

                </Link>
                <Link className="links" href="https://www.linkedin.com/in/heather-bjoin-bb833761/" target="_blank">
                <LinkedInIcon style={{ fontSize: 45 }} color="primary"></LinkedInIcon>

                </Link>
                <Link className="links" href="https://heatmarie.com/" target="_blank">
                <BookOutlinedIcon style={{ fontSize: 45 }} color="primary"></BookOutlinedIcon>

                </Link>
            </div>
            <div className="footer">
            <h4 className="footer-h3">Where imagination becomes <span className="footer-span">reality</span></h4>
            <p className="footer-p"> { '\u00A9' } Heather Bjoin</p>
            </div>
        </footer>

        </ThemeProvider>

    )
}

export default Footer




