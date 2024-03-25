import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar';

function App() {

  return (
    <Router>
      <div>

        <Routes>

          <Route path="/navbar" exact element={<Navbar/>}/>

        </Routes>
      </div>
    </Router>
     
    
  )
}

export default App
