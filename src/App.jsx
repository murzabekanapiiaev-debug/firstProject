import { useState } from 'react'
import Header from './components/Header';
import Intro from './components/intro';
import CaseStudio from './components/CaseStudio';
import Invoriem from './components/Invoriem';
import Footer from './components/Footer';

import './App.css'


function App() {


  return (
    <>
      <div className='app'>
        <div className='header-intro'>
          <Header />
          <Intro />
        </div>
        <CaseStudio />
        <Invoriem />
        <Footer />
      </div>
    </>
  )
}

export default App;
