import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StorageIcon from '@material-ui/icons/Storage';
import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#eeeeee',
      padding: 30,
    },
    list: {
      marginTop: 10,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    icon: {
      color: '#eeeeee',
    },
  }),
);

const Skill: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>SKILLS</strong>
      </Typography>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <StorageIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Back-end" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Node.js, Express.js" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="MySQL, Sequelize ORM" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="PHP, Laravel" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <ImportantDevicesIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Front-end" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="HTML, CSS, Bootstrap" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="React.js, Redux" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Material-UI, Material-table" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <CloudUploadIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Cloud (AWS)" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="EC2, VPC, S3, IAM" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Lambda, RDS, Route53" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <SettingsIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Others" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="REST API, Postman API," />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Git, JSON" />
          </ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default Skill;
