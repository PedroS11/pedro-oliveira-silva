import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import photo from '../assets/images/profile.jpg';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        backgroundImage: `url(${photo})`,
        width: '100%',
        height: '450px',
        backgroundSize: 'cover',
        color: 'white'
    },
    photoText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
}));

const ProfilePhoto = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" align="center" gutterBottom className={classes.photoText}>
                Pedro Oliveira da Silva
                <Typography align="center" gutterBottom>
                    Master in Informatics and Computing Engineering @ FEUP
                </Typography>
            </Typography>
        </div>
    );
};

export default ProfilePhoto;