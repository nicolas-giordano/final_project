import React, { Component } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Trending from './Trending.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Search />
      <section id='anime__listings'>
        <Trending />
      </section>
      </>
    )
  }
}

export default App;
