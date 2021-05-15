import { Box, makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import React from 'react';
import { ProfileType } from '../../../data/profile';

const useStyles = makeStyles(() => ({
  root: {
    // marginTop: 200,
    padding: 30,
  },
}));

const columnData = [
  {
    title: <strong>PRIOD</strong>,
    field: 'priod',
    headerStyle: {
      minWidth: 120,
    },
    cellStyle: {
      minWidth: 120,
    },
    sorting: true,
  },
  {
    title: <strong>PROJECTS</strong>,
    field: 'projects',
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

const Project: React.FC<Props> = (props) => {
  const classes = useStyles();

  const rowData = props.profile.projects.map((project, index) => {
    return {
      priod: project.period,
      projects: (
        <Box key={index}>
          <Typography variant="h6" component="h2" display="block">
            <strong>{project.title}</strong>
          </Typography>
          <Typography component="span">
            {project.type}
            <ul>
              {project.descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </Typography>
        </Box>
      ),
    };
  });

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>PERSONAL PROJECTS</strong>
      </Typography>

      <MaterialTable
        columns={columnData}
        data={rowData}
        options={{
          draggable: false,
          toolbar: false,
          paging: false,
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
