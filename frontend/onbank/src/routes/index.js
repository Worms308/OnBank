import { paths } from 'routes/paths';
import TransferList from 'pages/TransferList/TransferList';
import CompletedTransactions from 'pages/TransferList/TransactionTable/ComplitedTransactions/ComplitedTransactions';
import PendingTransactions from 'pages/TransferList/TransactionTable/PendingTransactions/PendingTransactions';

export const routes = [
  {
    path: `${paths.transferList}`,
    component: TransferList,
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
