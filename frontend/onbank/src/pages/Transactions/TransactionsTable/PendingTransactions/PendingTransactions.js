import React from 'react';
import Table from 'shared/Table';

const datatableData = [
  [
    '02.01.2019',
    'Jan Kowalski 00000000000000000000000000',
    'Hajs za YT',
    'Przelew z rachunku',
    50.0,
    999950.0,
  ],
];

const PendingTransactions = () => (
  <Table data={datatableData} />
);

export default PendingTransactions;
