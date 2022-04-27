import "./projects.css";
import {Grid} from "@mui/material";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import ProjectData from "./ProjectData";
import ProjectCard from "./Card/ProjectCard";
import uuid from 'react-uuid';

const Projects = () => {
    return (
        <div className="projects-section">
            <ScreenHeading title={"My Projects"} subHeading={"Hardwork Pays Off"} />
            <div align="center">
                <Grid container spacing={2}>
                    {ProjectData.map(data => (
                        <Grid item xs={12} md={4} key={uuid()}>
                            <ProjectCard 
                                image={data.image}
                                alt={data.alt}
                                title={data.title}
                                description={data.description}
                                link={data.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}




export default Projects;