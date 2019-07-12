import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from 'store';
import { routes } from 'routes';
import { paths } from 'routes/paths';
import RouteWithSubRoutes from 'routes/RouteWithSubRoutes';
import customTheme from 'themes/customTheme';
import Navigator from 'pages/Navigator';
import Template from 'pages/Template/Template';
import NewTransfer from 'pages/NewTransfer/NewTransfer';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <>
        <ToastContainer />
        <CssBaseline />
        <Router path="/">
          <Switch>
            <Template>
              <Route exact path={paths.home} component={Navigator} />
              <Route path={paths.newTransfer} component={NewTransfer} />

              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Redirect to={paths.home} />
            </Template>
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
