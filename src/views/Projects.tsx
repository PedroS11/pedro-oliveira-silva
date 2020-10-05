import { Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ProjectCard from "../components/ProjectCard";

const projectList = [
    {
        imgPath: require('../assets/images/twitch.png'),
        title: 'twitch-live-extension',
        description: 'Chrome extension that shows your favorites streamers live on Twitch',
        url: 'https://github.com/PedroS11/twitch-live-extension'
    },
    {
        imgPath: require('../assets/images/aws.png'),
        title: 'aws-cloudformation-templates\n',
        description: 'A set of the most common patterns and templates used with AWS',
        url: 'https://github.com/PedroS11/aws-cloudformation-templates'
    },
    {
        imgPath: require('../assets/images/typescript.png'),
        title: 'typescript-starter',
        description: 'This repository has everything you need to start a typescript project',
        url: 'https://github.com/PedroS11/typescript-starter'
    },
];

const useStyles = makeStyles( () => ({
    root: {
        marginBottom: '20px'
    }
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" align="center" gutterBottom>
                Projects
            </Typography>
            <Grid container>
                {projectList.map(e => (
                    <Grid item xs={12} sm={4} key={e.title}>
                        <ProjectCard {...e}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Projects;