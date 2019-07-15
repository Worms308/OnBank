import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from 'store';
import { routes } from 'routes';
import RouteWithSubRoutes from 'routes/RouteWithSubRoutes';
import customTheme from 'themes/customTheme';
import Template from 'core/Template/Template';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <>
        <ToastContainer />
        <CssBaseline />
        <Router path="/">
          <Route
            path="/"
            render={() => {
              return (
                <Template>
                  <Switch>
                    {routes.map(route => (
                      <RouteWithSubRoutes key={route.component} {...route} />
                    ))}
                  </Switch>
                </Template>
              );
            }}
          />
        </Router>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
