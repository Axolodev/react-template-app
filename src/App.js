import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { globalTheme } from './styles/themes';
import Navbar from './components/Navbar';
import Routes from './pages/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={globalTheme}>
          <Fragment>
            <Navbar />
            <Routes />
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
