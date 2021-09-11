import { useState, useEffect, useRef, Suspense, lazy, useReducer } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  CircularProgress
} from '@material-ui/core';
import {
  MuiThemeProvider,
  createTheme
} from '@material-ui/core/styles';

/* components */
import View from 'components/View';

/* containers */
import Home from 'containers/Home';

/* global styles */
import './styles';
import './global/fonts';
import './global/text';
import './global/display';
import './global/components';
import './global/colors';

const theme = createTheme({
  palette: {
    primary: { main: '#005eff' },
    secondary: { main: '#ffffff' },
  },
  typography: {
    fontFamily: 'Exo',
    button: {
      textTransform: 'none'
    }
  }
});


const App = () => {

  /* ui */
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Home/>
      </Switch>
    </MuiThemeProvider>
  );

}

export default App
