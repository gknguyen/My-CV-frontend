import { Box, makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useState } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 200,
    padding: 30,
  },
}));

const columnData = [
  { title: <strong>PRIOD</strong>, field: 'priod', width: 300, sorting: true },
  { title: <strong>PROJECTS</strong>, field: 'projects', width: 1000, sorting: false },
];

const rowData = [
  {
    priod: 'Sep 2017 – Jun 2018',
    projects: (
      <Box>
        <Typography variant="h6" component="h2" display="block">
          <strong>BUILD A GAS LEAKED MONITORING SYSTEM BASED ON WIRELESS NETWORKS</strong>
        </Typography>
        <Typography component="span">
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
        <Typography component="span">
          Personal project
          <ul>
            <li>
              Have some features such as employees management, menu management, customer info
              management, add food to cart and invoice receipts for customers, finance management
            </li>
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
        <Typography component="span">
          Freelance project
          <ul>
            <li>
              An e-commercial web app which provides website templates for customers with many kinds
              of business aspect such as food, clothes, electronic and enterprises.
            </li>
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
        <Typography component="span">
          Personal project
          <ul>
            <li>Based on Typescript language with React.js framework</li>
            <li>Use Material-UI for UI template</li>
            <li>Public with AWS server</li>
          </ul>
        </Typography>
      </Box>
    ),
  },
];

const Project: React.FC = () => {
  const classes = useStyles();

  const [columns, setColumns] = useState(columnData);
  const [data, setData] = useState(rowData);
  const [isPaging, setIsPaging] = useState(false);

  const handleClick = () => {
    setIsPaging(!isPaging);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>PERSONAL PROJECTS</strong>{' '}
        {/* <IconButton onClick={handleClick}>
          <MenuBookIcon />
        </IconButton> */}
      </Typography>

      <MaterialTable
        columns={columns}
        data={data}
        options={{
          draggable: false,
          toolbar: false,
          paging: isPaging,
          pageSize: 3,
          pageSizeOptions: [3, 6, 9],
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
