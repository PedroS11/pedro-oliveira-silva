import React from 'react';
import Footer from "./views/Footer";
import ProfilePhoto from "./views/ProfilePhoto";
import {Grid} from "@material-ui/core";
import Contacts from "./views/Contacts";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import {makeStyles} from "@material-ui/core/styles";
import waveLogo from "./assets/images/wave.png";

const useStyles = makeStyles(() => ({
    waveBackground: {
        backgroundImage: `url(${waveLogo})`,
        backgroundSize: 'cover'
    },
    sections: {
        marginTop: '15px'
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
            <Grid container direction="row" justify="center" className={classes.sections}>
                <Grid item xs={8}>
                    <Experience/>
                </Grid>
            </Grid>

            {/* Projects */}
            <Grid container direction="row" justify="center" alignItems="center"
                  className={`${classes.waveBackground} ${classes.sections}`}>
                <Projects/>
            </Grid>

            {/* Contacts */}
            <Grid container direction="row" justify="center" alignItems="center" className={classes.sections}>
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
