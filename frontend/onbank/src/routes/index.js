import { paths } from 'routes/paths';
// import Dashboard from 'pages/Dashboard/Dashboard';
import Transactions from 'pages/Transactions/Transactions';
import TransactionDetails from 'pages/Transactions/TransactionDetails/TransactionDetails';
import TransactionTable from 'pages/Transactions/TransactionsTable/TransactionsTable';
import CompletedTransactions from 'pages/Transactions/TransactionsTable/ComplitedTransactions/ComplitedTransactions';
import PendingTransactions from 'pages/Transactions/TransactionsTable/PendingTransactions/PendingTransactions';
import NewTransfer from 'pages/NewTransfer/NewTransfer';

export const routes = [
  /*{
    exact: true,
    path: paths.home,
    component: Dashboard,
  },*/
  {
    path: paths.transactions,
    component: Transactions,
    routes: [
      {
        path: paths.detailsTransaction,
        component: TransactionDetails,
      },
      {
        path: paths.transactions,
        component: TransactionTable,
        routes: [
          {
            path: paths.completedTransactions,
            component: CompletedTransactions,
          },
          {
            path: paths.pendingTransactions,
            component: PendingTransactions,
          },
        ],
      },
    ],
  },
  {
    path: paths.newTransfer,
    component: NewTransfer,
  },
];
