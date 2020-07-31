import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import Details from '../main/details/details';
import configureStore from '../redux/configureStore';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes';

const store = configureStore();

const App: React.FC = () => {
  useEffect(() => {
    document.title = "GK's CV";
  }, []);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Details />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
