import "./skills.css";
import {Card, CardMedia} from '@mui/material';
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import SkillsData from "./skillsData";
import {Grid} from "@mui/material";
import uuid from 'react-uuid';

const Skills = () => {
    return (
        <div className="skills-section">
            <ScreenHeading title={"My Skills"} subHeading={"My Tools"} />
            <div align="center" className="skills-set">
                <Grid container spacing={2}>
                    {SkillsData.map(data => (
                        <Grid item xs={12} md={4} key={uuid()}>
                            <Card sx={{ maxWidth: 345 }} 
                                key={uuid()}
                                style={{backgroundColor: "black"}} 
                                className="skill-cards">
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    image={data.image}
                                    alt={data.alt}
                                    style={{objectFit: "scale-down"}}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}


export default Skills