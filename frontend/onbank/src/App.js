import React from 'react';
import './App.scss';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import SecondPage from './pages/SecondPage'
import FirstPage from './pages/FirstPage';

function App() {
  return (
    <div className="App">
     <Router>
        <Route path="/" component={FirstPage} /> 
        <Route path="/secondPage" component={SecondPage} /> 
     </Router>
    
    </div>
  );
}

export default App;
