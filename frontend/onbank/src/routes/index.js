import { paths } from 'routes/paths';
import Transactions from 'pages/Transactions/Transactions';
import CompletedTransactions from 'pages/Transactions/TransactionsTable/ComplitedTransactions/ComplitedTransactions';
import PendingTransactions from 'pages/Transactions/TransactionsTable/PendingTransactions/PendingTransactions';

export const routes = [
  {
    path: `${paths.transactions}`,
    component: Transactions,
    routes: [
      {
        path: `${paths.completedTransactions}`,
        component: CompletedTransactions,
      },
      {
        path: `${paths.pendingTransactions}`,
        component: PendingTransactions,
      },
    ],
  },
];
