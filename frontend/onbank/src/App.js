import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from 'pages/FirstPage';
import SecondPage from 'pages/SecondPage';
import store from 'store';
import TestRedux from 'pages/TestRedux';

const App = () => (
  <Provider store={store}>
    <Router path="/">
      <div>
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
        <Route path="/redux" component={TestRedux} />
      </div>
    </Router>
  </Provider>
);

export default App;
