import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import TodayIcon from '@material-ui/icons/Today';
import moment from 'moment';
import React from 'react';

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

const Personal: React.FC = () => {
  const classes = useStyles();
  const date = moment('1995/11/17').format('LL');

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>PERSONAL INFORMATIONS</strong>
      </Typography>

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <TodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={date} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <FaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Male" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Go Vap District, HCMC" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatarColor}>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="International UniverSity - HCMC"
            secondary="Electrical Engineering (GPA: 2.8/4.0)"
            secondaryTypographyProps={{ color: 'inherit' }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Personal;
