import React from 'react';
import Footer from "./views/Footer";
import ProfilePhoto from "./views/ProfilePhoto";
import {Grid} from "@material-ui/core";
import Contacts from "./views/Contacts";
import MyTimeline from "./views/MyTimeline";
import Projects from "./views/Projects";
import {makeStyles} from "@material-ui/core/styles";
import waveLogo from "./assets/images/wave.png";

const useStyles = makeStyles(() => ({
    waveBackground: {
        backgroundImage: `url(${waveLogo})`,
        backgroundSize: 'cover'
    },
    footer: {
        borderTop: '1px solid #CECECE',
        paddingBottom: '5px'
    }
}));

function App() {
    const classes = useStyles();
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

            {/* Projects */}
            <Grid container direction="row" justify="center" alignItems="center" className={classes.waveBackground}>
                <Projects/>
            </Grid>

            {/* Contacts */}
            <Grid container direction="row" justify="center" alignItems="center">
                <Contacts/>
            </Grid>

            {/* Footer */}
            <Grid container direction="row" justify="center" alignItems="center" className={classes.footer}>
                <Footer/>
            </Grid>
        </div>
    );
}

export default App;
