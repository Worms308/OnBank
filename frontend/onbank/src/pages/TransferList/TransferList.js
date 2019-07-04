import React from 'react';
import RouteWithSubRoutes from 'routes/RouteWithSubRoutes';
import AccountBar from './AccountBar';
import TransactionTable from './TransactionTable/TransactionTable';

export default function TransferList({ routes }) {
  console.log(routes);
  return (
    <>
      <AccountBar />
      <TransactionTable />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </>
  );
}
