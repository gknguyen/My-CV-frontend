import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
    },
    lineBreak: {
      lineBreak: 'normal',
    },
  }),
);

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>ABOUT</strong>
      </Typography>
      <Box component="span" className={classes.lineBreak}>
        My career path is to become an expert Full-stack programmer.
        <br />
        I look forward to learning and working with the new technologies in the current 4.0 generation economy,
        practicing my skills so I can adapt well to the needs and flexible changes of the market.
        <br />
        It would be great if I had the opportunity to work in an environment where English is the key because I want to
        train my ability to communicate and work in English.
      </Box>
    </Box>
  );
};

export default About;
