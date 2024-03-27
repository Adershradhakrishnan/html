import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Content1 from './components/Content1/Content1';
import Macbook from './components/Macbook/Macbook';
import Imacs from './components/Imacs/Imacs';
import Watch from './components/Watch/Watch';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
function App() {

  return (
    
      <>
      <Navbar/>
       <Content/> 
       <Content1/>
       <Macbook/>
       <Imacs/>
       <Watch/>
       <Banner/>
       <Footer/>
       <Copyright/>
      </>
    
     
    
  )
}

export default App
