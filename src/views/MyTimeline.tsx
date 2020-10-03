import React from 'react';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";
import {Typography} from "@material-ui/core";
import upLogo from '../assets/images/up.jpg';
import glinttLogo from '../assets/images/glintt.jpeg';
import minderaLogo from '../assets/images/mindera.jpeg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    img: {
        borderRadius: '50%',
        height: 40,
        width: 40
    },
    paper: {
        padding: '1px 16px',
    }
}));

interface TimelineEvent {
    periodOfTime: string,
    logo: string,
    title: string,
    description?: string,
}

const events: TimelineEvent[] = [{
    periodOfTime: 'Sept 2013',
    logo: upLogo,
    title: 'Begin of the Master in Computer Science',
}, {
    periodOfTime: 'Feb 2018 - Jun 2018',
    logo: glinttLogo,
    title: 'Software Engineering Intern @ Glintt HS Porto',
    description: 'Master thesis on Machine Learning for drugs prescription',
}, {
    periodOfTime: 'Jul 2018',
    logo: upLogo,
    title: 'Master in Computer Science - FEUP',
}, {
    periodOfTime: 'Jul 2018 - Jan 2020',
    logo: glinttLogo,
    title: 'Backend developer @ Glintt HS',
}, {
    periodOfTime: 'Nov 2018',
    logo: upLogo,
    title: 'Paper presentation at IDEAL 2018 - Madrid',
    description: 'Submission of a paper to a conference based on the master thesis project',
}, {
    periodOfTime: 'Feb 2020 - Present',
    logo: minderaLogo,
    title: 'Fullstack developer @ Mindera',
}];

const MyTimeline = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h3" align="center" gutterBottom>
                Experience
            </Typography>
            <Timeline align="alternate">
                {
                    events.map(e => (
                        <TimelineItem key={e.title}>
                            <TimelineOppositeContent>
                                <Typography variant="subtitle1" display={"inline"} color="textSecondary" gutterBottom>
                                    {e.periodOfTime}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <img className={classes.img} src={e.logo} alt="Company logo"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div>
                                    <Typography variant="h6" component="h1">
                                        {e.title}
                                    </Typography>
                                    {e.description && <Typography>{e.description}</Typography>}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
};

export default MyTimeline;