import {
    Link,
    Typography
} from '@material-ui/core';
import React from "react";

export default () => {
    return (
        <Typography variant="subtitle1" align="center">
            {'© '}
            <Link href="https://github.com/PedroS11">Pedro Silva</Link>
            {' '}{new Date().getFullYear()}
        </Typography>
    );
}