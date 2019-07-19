import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from 'routes/RouteWithSubRoutes';

export default function Transactions({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}
