import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'store';
import { routes } from 'routes';
import FirstPage from 'pages/FirstPage';
import SecondPage from 'pages/SecondPage';
import TestRedux from 'pages/TestRedux';
import TransferList from 'pages/TransferList/TransferList';
import Navigator from 'pages/Navigator';
import Template from 'pages/Template/Template';

const App = () => (
  
  <Provider store={store}>
    <Template>
      <Router path="/">
        <Route exact path={routes.home} component={Navigator} />
        <Route exact path="/firstPage" component={FirstPage} />
        <Route path="/secondPage" component={SecondPage} />
        <Route path="/redux" component={TestRedux} />
        <Route path={routes.transferList} component={TransferList} />
      </Router>
    </Template>
  </Provider>
  
);

export default App;
