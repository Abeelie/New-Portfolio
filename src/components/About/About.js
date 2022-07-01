import {useState} from "react";
import "./about.css";
import {Box, Grid } from "@mui/material";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import AboutImage from "../../assets/About/About.webp";
import AboutHoverImage from "../../assets/About/AboutHoverImage.gif";

const About = () => {
    const [imageState, setImageState] = useState(AboutImage);

    return (
        <div className="about">
            <ScreenHeading title={"About Me"} subHeading={"Get To Know Me"} />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <img src={imageState} 
                            alt="loop"
                            width="100%"
                            height="100%"
                            className="about-img"
                            onMouseOver={() => setImageState(AboutHoverImage)}
                            onMouseOut={() => setImageState(AboutImage)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className="about-text">
                            To be or not to be a software developer. That's 
                            a question that I choose to answer. Why not be a
                            software developer. It's one of the most coolest jobs in the
                            world. You get to create technology that can impact
                            people lives in a postive way. Helping people is what
                            I like to do. In my previous experience, I worked with 
                            many non-profits on building their websites to help them gain
                            more donations for their cause. In addition, I was able to help
                            them save money from having to hire developers who charged a lot of
                            money for the services I rendered. I fell in love with developing 
                            technologies and I am inspired by how much good these technologies
                            can create for society. I like to code and hang out with
                            friends and family. I believe I would be an excellent addition to
                            your team.
                        </p>
                        <div className="btn-grouped" align="center">
                            <a href="https://www.linkedin.com/in/abraham-elie/" className="button button-1">Check out my linkedin</a>
                            <a href="https://github.com/Abeelie"  className="button button-2">Check out my github</a>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default About;




// https://www.smurphyk.com/#!