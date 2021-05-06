import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';
import { Skill } from '../../../../data/profile';

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: 10,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: '#eeeeee',
  },
}));

interface Props {
  skill: Skill;
}

const Category: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <ListItem button onClick={handleClick} className={classes.list}>
        <ListItemIcon>{props.skill.image}</ListItemIcon>
        <ListItemText primary="Languages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.skill.list.map((item) => (
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <AddIcon className={classes.icon} fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default Category;
