import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <MainContent />
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
