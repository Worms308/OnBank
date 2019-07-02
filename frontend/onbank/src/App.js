import React from 'react';
import './App.scss';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import SecondPage from './pages/SecondPage'
import FirstPage from './pages/FirstPage';

function App() {
  return (
    <Router path ='/'>
    <div className="App">
     
          <ul>
            <li>
              <Link to="/firstPage">FirstPage</Link>
            </li>
            <li>
              <Link to="/secondPage">SecondPage</Link>
            </li>
          </ul>
        <Route exact path="/firstPage" component={FirstPage} /> 
        <Route path="/secondPage" component={SecondPage} /> 
    
    
    </div>
    </Router>
  );
}

export default App;
