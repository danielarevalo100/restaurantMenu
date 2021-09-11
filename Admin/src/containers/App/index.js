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
import Header from 'components/Header';

/* containers */
import Home from 'containers/Home';
import Plates from 'containers/Plates';

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
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/plates' component={Plates}/>
      </Switch>
    </MuiThemeProvider>
  );

}

export default App
