import "./footer.css";
import { Box, Container, Grid, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer align="center">
            <Box className="footer">
                <Container maxWidth="lg">
                    <Grid >
                        <Box borderBottom={1}></Box>
                        <Box>
                            <Link href="https://github.com/Abeelie" 
                                  color="inherit" 
                                  underline="hover">
                                <GitHubIcon fontSize="large" className="social"/> 
                            </Link>
                            <Link href="https://www.linkedin.com/in/abraham-elie/" 
                                  color="inherit" 
                                  underline="hover">
                                <LinkedInIcon fontSize="large" className="social"/>
                            </Link>
                        </Box>
                    </Grid>
                    <p className="footer-text">&copy; My Portfolio</p>
                    <p className="footer-text">Developed by Abraham Elie</p>
                </Container>
            </Box>
        </footer>
    )
}


export default Footer;