import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import photo from '../assets/images/profile.jpg';

const useStyles = makeStyles(() => ({
    img: {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        objectPosition: '0px -90px'
    }
}));

function ProfilePhoto() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.img} src={photo}/>
        </div>
    );
}

export default ProfilePhoto;