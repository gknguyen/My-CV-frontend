import { Box, makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
}));

const columnData = [
  { title: <strong>PRIOD</strong>, field: 'priod', width: 300, sorting: true },
  { title: <strong>COMPANIES</strong>, field: 'companies', width: 1000, sorting: false },
];

const rowData = [
  {
    priod: 'Jun 2017 – Sep 2017',
    companies: (
      <Box>
        <Typography variant="h6" component="h2" display="block">
          <strong>REETECH INDUSTRY SUMMER INTERSHIP</strong>
        </Typography>
        <Typography component="span">
          Mechanical/Electrical Engineer
          <ul>
            <li>Learned how to build and fix switchboards</li>
            <li>Learned how to use some automatic machines like QUADA AE2510 NT</li>
            <li>Learned some knowledge of some type of air-conditioner products</li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    priod: 'Sep 2018 - Jan 2020',
    companies: (
      <Box>
        <Typography variant="h6" component="h2" display="block">
          <strong>CAPGEMINI</strong>
        </Typography>
        <Typography component="span">
          Software Engineer
          <ul>
            <li>Worked with AXAPAC team – provide IT solutions for AXA Insurance companies</li>
            <li>Worked with backend systems based on COBOL language</li>
            <li>Communicated in French with co-workers and clients</li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    priod: 'Feb 2020 - Now',
    companies: (
      <Box>
        <Typography variant="h6" component="h2" display="block">
          <strong>GEO SYSTEM SOLUTIONS VIETNAM</strong>
        </Typography>
        <Typography component="span">
          Software Engineer
          <ul>
            <li>Working with AWS services (EC2, S3)</li>
            <li>Communicating in Japan with co-workers and clients</li>
            <li>
              <b>Project management system</b> project (Node.js, React.js): employees and team
              management, create projects and assign teams to handle, documents are upload and
              manage using Google Drive API.
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
];

const Experience: React.FC = () => {
  const classes = useStyles();

  const [columns, setColumns] = useState(columnData);
  const [data, setData] = useState(rowData);

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>WORK EXPERIENCES</strong>
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

export default Experience;