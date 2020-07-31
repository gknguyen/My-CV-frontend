import { Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#eeeeee',
      padding: 30,
    },
  }),
);

const Contact: React.FC = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>CONTACT</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
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
            <Avatar>
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
            <Avatar>
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

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="nguyentruonggiang1711@gmail.com" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Contact;
