import { paths } from 'routes/paths';
import Dashboard from 'pages/Dashboard/Dashboard';
import Transactions from 'pages/Transactions/Transactions';
import CompletedTransactions from 'pages/Transactions/TransactionsTable/ComplitedTransactions/ComplitedTransactions';
import PendingTransactions from 'pages/Transactions/TransactionsTable/PendingTransactions/PendingTransactions';
import NewTransfer from 'pages/NewTransfer/NewTransfer';

export const routes = [
  {
    path: paths.transactions,
    component: Transactions,
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
  {
    path: paths.newTransfer,
    component: NewTransfer,
  },
  {
    path: paths.home,
    component: Dashboard,
  },
];
