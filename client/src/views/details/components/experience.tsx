import {
  Box,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import React from 'react';
import { ProfileType } from '../../../data/profile';

const useStyles = makeStyles(() => ({
  root: {
    padding: 30,
  },
  tableHeader: {
    backgroundColor: '#29b6f6',
    color: '#eeeeee',
  },
}));

const columnData = [
  {
    title: <strong>PRIOD</strong>,
    field: 'priod',
    headerStyle: {
      width: 180,
      minWidth: 120,
    },
    cellStyle: {
      width: 180,
      minWidth: 120,
    },
    sorting: true,
  },
  {
    title: <strong>COMPANIES</strong>,
    field: 'companies',
    headerStyle: {
      minWidth: 500,
    },
    cellStyle: {
      minWidth: 500,
    },
    sorting: false,
  },
];

interface Props {
  profile: ProfileType;
}

const Experience: React.FC<Props> = (props) => {
  const classes = useStyles();

  const rowData = props.profile.experiences.map((experience, index) => {
    return {
      priod: experience.period,
      companies: (
        <Box>
          <Typography variant="h6" component="h2" display="block">
            <strong>{experience.title}</strong>
          </Typography>

          <Typography component="span">
            {experience.position}
            <ul>
              {experience.descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </Typography>

          {experience.projects && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeader}>
                      <Typography>NAME</Typography>
                    </TableCell>
                    <TableCell className={classes.tableHeader}>
                      <Typography>DESCRIPTION</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {experience.projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography gutterBottom>
                          <b>{project.name}</b>
                        </Typography>
                        <Typography>{project.position}</Typography>
                      </TableCell>
                      <TableCell>
                        <ul>
                          {project.descriptions.map((description, index) => (
                            <li key={index}>
                              <Typography>{description}</Typography>
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      ),
    };
  });

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>WORK EXPERIENCES</strong>
      </Typography>

      <MaterialTable
        columns={columnData}
        data={rowData}
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
