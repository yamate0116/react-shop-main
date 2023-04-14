import React, { Component } from 'react';
import './App.css';
import Loader from './Containers/Loader';
import Header from './Containers/Header';
import Menu from './Containers/Menu';

import Main from './Containers/Main';
import Footer from './Containers/Footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Loader />
        <a className="scrollToTop" href="javascript:void(0)"><i className="fa fa-chevron-up">ok</i></a>
        <Header />
        <Menu />
        <main>
          <Main />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
