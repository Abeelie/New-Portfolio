import "./project-card.css";
import {
    Card, 
    CardContent, 
    CardMedia,
    Typography,
    CardActions
} from '@mui/material';


const ProjectCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }} 
              style={{backgroundColor: "black"}} 
              className="cards">
          <CardMedia
            component="img"
            height="300px"
            image={props.image}
            alt={props.alt}
          />
          <CardContent>
            <Typography className="text-color" gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography className="text-color" variant="body1" >
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <a className="project-link" href={props.link}> Click here to check it out!!!.</a>
          </CardActions>
        </Card>
      );
}

export default ProjectCard 