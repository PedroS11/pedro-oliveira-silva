import React from 'react';
import Footer from "./views/Footer";
import ProfilePhoto from "./views/ProfilePhoto";
import {Grid} from "@material-ui/core";
import Contacts from "./views/Contacts";
import MyTimeline from "./views/MyTimeline";

function App() {
    return (
        <div>
            {/* Profile photo */}
            <Grid container direction="row" justify="center" alignItems="center">
                <ProfilePhoto/>
            </Grid>

            {/* Timeline */}
            <Grid container direction="row" justify="center">
                <Grid item xs={8}>
                    <MyTimeline/>
                </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center">
                {/* Projects */}
                <h1>Projects</h1>
            </Grid>

            {/* Contacts */}
            <Grid container direction="row" justify="center" alignItems="center">
                <Contacts/>
            </Grid>

            {/* Footer */}
            <Grid container direction="row" justify="center" alignItems="center">
                <Footer/>
            </Grid>
        </div>
    );
}

export default App;
