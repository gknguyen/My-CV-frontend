import { Box } from '@material-ui/core';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from '../redux/configureStore';
import Details from '../views/details/details';
import './App.scss';
import theme from './themes';

const useStyles = makeStyles((theme) =>
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
