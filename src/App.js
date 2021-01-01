import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1s from './components/Section1s';
import Banner2 from './components/Banner2';
import Section1x from './components/Section1x'
import Banner from './components/Banner'

import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Section1x/>
    {/* <Banner2/> */}
    <Banner/>
    <Section1s/>
    <Footer/>
    </div>
  );
}

export default App;
