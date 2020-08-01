import { Avatar, Card, CardContent, CardHeader, CardMedia, Container, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Personal from './components/personal';
import Project from './components/project';
import Skill from './components/skill';

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
    cardFooter: {
      borderTop: '1px solid black',
      color: '#eeeeee',
      backgroundColor: '#01579b',
      height: 40,
    },
    printButton: {
      padding: 10,
      color: '#eeeeee',
    },
    avatarColor: {
      backgroundColor: '#546e7a',
    },
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
                <Personal />
                <Contact />
                <Skill />
              </Container>
            </Grid>

            <Grid container item xs={8} className={classes.careerInfo}>
              <Container disableGutters>
                <About />
                <Experience />
                <Project />
              </Container>
            </Grid>

            <Grid container item xs={12} className={classes.cardFooter} justify="center" alignItems="center">
              Powered by @Material-UI
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container justify="flex-end" className={classes.printButton}>
        <IconButton color="inherit">
          <SaveAltIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Container>
  );
};

export default Details;
