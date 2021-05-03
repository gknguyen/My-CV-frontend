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
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginTop: 435,
      color: '#eeeeee',
      padding: 30,
      // padding: '30px 20px',
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
          <GTranslateIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Languages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="English (IELTS 6.5)" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="French (DELF A2)" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Japan (beginner)" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <CodeIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Programming Languages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Javascript, Typescript" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Cobol, Java, PHP" />
          </ListItem>
        </List>
      </Collapse>

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
            <ListItemText primary="OOP, Spring boot, Laravel" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Redis" />
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
            <ListItemText primary="HTML5, CSS3, Bootstrap 4" />
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
          <BuildIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Testing" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Jest, Mocha, Chai" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Mochawesome report" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Postman" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>
          <CloudUploadIcon className={classes.icon} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Cloud" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="AWS (EC2, VPC, S3, IAM, RDS)" />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <AddIcon className={classes.icon} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Google (Drive, Directory)" />
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
            <ListItemText primary="REST API" />
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
