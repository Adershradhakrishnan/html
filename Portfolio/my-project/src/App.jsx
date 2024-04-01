import About from './Components/About/About';
import { BrowserRouter as Router,Routes,Route,Link,useParams, } from 'react-router-dom';
import './App.css'

function App() {
  
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App
