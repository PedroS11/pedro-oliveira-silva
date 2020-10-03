import {
    Link,
    Typography
} from '@material-ui/core';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    typographyStyle: {
        display: 'flex',
    }
}));


export default () => {
    return (
        <Typography variant="subtitle1" align="center">
            {'© '}
            <Link href="https://github.com/PedroS11">Pedro Silva</Link>
            {' '}{new Date().getFullYear()}
        </Typography>
    );
}