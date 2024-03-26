import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Content1 from './components/Content1/Content1';
function App() {

  return (
    
      <>
      <Navbar/>
       <Content/> 
       <Content1/>
      </>
    
     
    
  )
}

export default App
