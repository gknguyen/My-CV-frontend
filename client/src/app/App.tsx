import { Box, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from '../redux/configureStore';
import Profile from '../views/details/profile';
import './App.scss';
import theme from './themes';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 800,
  },
}));

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
          <Profile />
        </Box>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
