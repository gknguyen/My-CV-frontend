import { Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#eeeeee',
      padding: 30,
    },
    avatarColor: {
      backgroundColor: '#546e7a',
    },
  }),
);

const Contact: React.FC = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>CONTACTS</strong>
      </Typography>

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <PhoneIphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="0978205130" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="nguyentruonggiang1711@gmail.com" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <FacebookIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link href="https://www.facebook.com/gknguyen1711" target="_blank" color="inherit">
                https://www.facebook.com/gknguyen1711
              </Link>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link href="https://www.linkedin.com/in/gknguyen1711" target="_blank" color="inherit">
                https://www.linkedin.com/in/gknguyen1711
              </Link>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link href="https://github.com/gknguyen" target="_blank" color="inherit">
                https://github.com/gknguyen
              </Link>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Contact;