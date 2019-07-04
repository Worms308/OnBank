import React from 'react';
import { Redirect } from 'react-router-dom';
import { paths } from 'routes/paths';
import RouteWithSubRoutes from 'routes/RouteWithSubRoutes';
import AccountBar from './AccountBar';
import TransactionsTable from './TransactionsTable/TransactionsTable';

export default function Transactions({ routes }) {
  return (
    <>
      <AccountBar />
      <TransactionsTable />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect from={paths.transactions} to={paths.completedTransactions} />
    </>
  );
}
