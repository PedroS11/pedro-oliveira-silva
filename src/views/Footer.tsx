import {
    Link,
    Typography
} from '@material-ui/core';
import React from "react";

const Footer = () => {
    return (
        <Typography variant="subtitle1" align="center">
            {'Copyright © '}
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/PedroS11">Pedro Silva</Link>
            {' '}{new Date().getFullYear()}
        </Typography>
    );
};

export default Footer;