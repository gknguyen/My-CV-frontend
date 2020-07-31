import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
    },
  }),
);

const Experience: React.FC = () => {
  const classes = useStyles();

  const [columns, setColumns] = useState([
    { title: 'PRIOD', field: 'priod', width: 300 },
    { title: 'COMPANIES', field: 'companies', width: 1000 },
  ]);

  const [data, setData] = useState([
    {
      priod: 'Jun 2017 – Sep 2017',
      companies: (
        <Box>
          <Typography variant="h5" component="h2" display="block">
            <strong>REETECH INDUSTRY SUMMER INTERSHIP</strong>
          </Typography>
          <Typography>
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
          <Typography variant="h5" component="h2" display="block">
            <strong>CAPGEMINI</strong>
          </Typography>
          <Typography>
            Software Engineer
            <ul>
              <li>Working with AXAPAC team – provide IT solutions for AXA Insurance companies</li>
              <li>Working with backend systems based on COBOL language</li>
              <li>Communicating in French with co-workers and clients</li>
            </ul>
          </Typography>
        </Box>
      ),
    },
    {
      priod: 'Feb 2020 - Now',
      companies: (
        <Box>
          <Typography variant="h5" component="h2" display="block">
            <strong>GEO SYSTEM SOLUTIONS VIETNAM</strong>
          </Typography>
          <Typography>
            Software Engineer
            <ul>
              <li>Working with AWS services (EC2, S3)</li>
              <li>Communicating in Japan with co-workers and clients</li>
              <li>
                <b>Project management system</b> project (node.js, react.js)
              </li>
            </ul>
          </Typography>
        </Box>
      ),
    },
  ]);

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
          pageSize: data.length,
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
