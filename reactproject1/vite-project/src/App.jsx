import { useState } from 'react'

import './App.css'
import Landingpage from './components/Landing/Landing';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';

function App() {
  

  return (
   <Router>
    <div>
      <Routes>

      
   
       <Route path="/" exact element={<Landingpage/>}/>
       <Route path="/login" exact element={<Login/>}/>
       <Route path="/adduser" exact element={<AddUser/>}/>
       </Routes>
       </div>
       </Router>
    
  )
}

export default App
