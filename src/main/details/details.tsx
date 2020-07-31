import { Card, Container, Grid, Avatar, CardContent, CardMedia, CardHeader, Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Personal from './components/personal';
import Contact from './components/contact';
import Skill from './components/skill';
import Experience from './components/experience';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '12%',
    },
    cardHeader: {
      marginTop: -140,
      paddingLeft: 90,
      paddingRight: 90,
      borderBottom: '1px solid black',
    },
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: 20,
      border: '5px solid white',
    },
    personalInfo: {
      background: 'linear-gradient(45deg, #01579b 40%, #29b6f6 80%)',
    },
    careerInfo: {},
  }),
);

const Details: React.FC = () => {
  const classes = useStyles();

  return (
    <Container disableGutters>
      <Card raised>
        <CardMedia className={classes.media} image="/background.jpg" />
        <CardHeader
          className={classes.cardHeader}
          avatar={<Avatar src="/cool.jpg" className={classes.avatar} />}
          title="Nguyen Truong Giang"
          titleTypographyProps={{ variant: 'h4' }}
          subheader="Full-stack Developer (Node.js, React.js, AWS)"
          subheaderTypographyProps={{ variant: 'h5' }}
        />
        <CardContent>
          <Grid container>
            <Grid container item xs={4} className={classes.personalInfo} direction="column">
              <Container disableGutters>
                <Contact />
                <Skill />
              </Container>
            </Grid>
            <Grid container item xs={8} className={classes.careerInfo}>
              <Container disableGutters>
                <Personal />
                <Experience />
              </Container>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Details;
