import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import Details from '../main/details/details';
import configureStore from '../redux/configureStore';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 800,
    },
  }),
);

const App: React.FC = () => {
  const store = configureStore();
  const classes = useStyles();

  React.useEffect(() => {
    document.title = "GK's CV";
  }, []);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          <Details />
        </Box>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
