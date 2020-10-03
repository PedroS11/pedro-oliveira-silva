import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, CardMedia, Divider} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 170,
    },
});

const ProjectCard = ({imgPath, title, description, url}: {imgPath: string, title: string, description: string, url: string}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgPath}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider/>
            <CardActions>
                <Button size="small" target="_blank" rel="noopener noreferrer" href={url} endIcon={<GitHubIcon/>}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;