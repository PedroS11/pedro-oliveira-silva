import {
    Avatar,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    SvgIcon,
    Typography
} from '@material-ui/core';
import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default () => {
    return (
        <div>
            <Typography variant="h3" align="center" gutterBottom>
                Contacts
            </Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <RoomIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Trofa, Porto"/>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Link href="mailto:pedrosilva1137@gmail.com">Email me</Link>}/>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <GitHubIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Link target="_blank" rel="noopener noreferrer" href="https://github.com/PedroS11">/PedroS11</Link>}/>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LinkedInIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pedro-oliveira-silva">/in/pedro-oliveira-silva</Link>}/>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SvgIcon>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                     className="svg-inline--fa fa-stack-overflow fa-w-12 fa-2x">
                                    <path fill="currentColor"
                                          d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
                                          className=""/>
                                </svg>
                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Link target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9661304/pedro-silva">/pedro-silva</Link>}/>
                </ListItem>
            </List>
        </div>
    );
}