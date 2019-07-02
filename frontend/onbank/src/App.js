import React from 'react';
import './App.scss';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import SecondPage from './pages/SecondPage'
import FirstPage from './pages/FirstPage';
import Redux from './pages/Redux';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router path ='/'>
    <div className="App">
     
          <ul>
            <li>
              <Link to="/firstPage">FirstPage</Link>
            </li>
            <li>
              <Link to="/secondPage">SecondPage</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        <Route exact path="/firstPage" component={FirstPage} /> 
        <Route path="/secondPage" component={SecondPage} /> 
        <Route path="/redux" component={Redux} />
    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
