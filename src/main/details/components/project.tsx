import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import React, { useState } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
    },
  }),
);

const Project: React.FC = () => {
  const classes = useStyles();

  const [columns, setColumns] = useState([
    { title: <strong>PRIOD</strong>, field: 'priod', width: 300 },
    { title: <strong>PROJECTS</strong>, field: 'projects', width: 1000 },
  ]);

  const [data, setData] = useState([
    {
      priod: 'Sep 2017 – Jun 2018',
      projects: (
        <Box>
          <Typography variant="h6" component="h2" display="block">
            <strong>BUILD A GAS LEAKED MONITORING SYSTEM BASED ON WIRELESS NETWORKS</strong>
          </Typography>
          <Typography>
            Graduation project
            <ul>
              <li>Using Arduino for processor and Lora network</li>
              <li>Studying C/C++ language as well as HTML, CSS, Javascript for client</li>
              <li>Learning the knowledge of wireless sensor networks</li>
            </ul>
          </Typography>
        </Box>
      ),
    },
    {
      priod: 'Jul 2019 – Dec 2019',
      projects: (
        <Box>
          <Typography variant="h6" component="h2" display="block">
            <strong>DEVELOP A WEB APPLICATION FOR MANAGING RESTAURANT</strong>
          </Typography>
          <Typography>
            Personal project
            <ul>
              <li>Based on Java language with Spring MVC framework</li>
              <li>Using Bootstrap to build web client</li>
              <li>Using MySQL for database</li>
            </ul>
          </Typography>
        </Box>
      ),
    },
    {
      priod: 'Jun 2020 - Now',
      projects: (
        <Box>
          <Typography variant="h6" component="h2" display="block">
            <strong>SMARTVIETSOLUTION</strong>
          </Typography>
          <Typography>
            Freelance project
            <ul>
              <li>Based on PHP language with Laravel MVC framework</li>
              <li>Using Bootstrap to build web client</li>
              <li>Using MySQL for database</li>
            </ul>
          </Typography>
        </Box>
      ),
    },
    {
      priod: 'Jul 2020 - Now',
      projects: (
        <Box>
          <Typography variant="h6" component="h2" display="block">
            <strong>MY CV TEMPLATE</strong>
          </Typography>
          <Typography>
            Personal project
            <ul>
              <li>Based on Javascript language with React.js framework</li>
            </ul>
          </Typography>
        </Box>
      ),
    },
  ]);

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>PERSONAL PROJECTS</strong>{' '}
      </Typography>

      <MaterialTable
        columns={columns}
        data={data}
        options={{
          draggable: false,
          toolbar: false,
          paging: false,
          headerStyle: {
            backgroundColor: '#29b6f6',
            color: '#eeeeee',
          },
        }}
      />
    </Box>
  );
};

export default Project;
