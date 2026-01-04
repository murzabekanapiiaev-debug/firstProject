import { useState } from 'react'
import Header from './components/Header';
import Intro from './components/Intro';
import CaseStudio from './components/CaseStudio';
import Invoriem from './components/Invoriem';
import Footer from './components/Footer';

import './App.css'


function App() {


  return (
    <>
      <div className='app'>

        <Header />
        <Intro />
        <CaseStudio />
        <Invoriem />
        <Footer />
      </div>
    </>
  )
}

export default App;
