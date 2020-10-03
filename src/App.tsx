import React from 'react';
import Footer from "./views/Footer";
import ProfilePhoto from "./views/ProfilePhoto";
import {Grid, Link, Typography} from "@material-ui/core";
import Contacts from "./views/Contacts";

function App() {
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
                <ProfilePhoto/>
            </Grid>
            <Grid item xs={12}>
                <h1>Experience</h1>
            </Grid>
            <Grid item xs={12}>
                <h1>Projects</h1>
            </Grid>
            <Grid item xs={12}>
                <Contacts/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}

export default App;
