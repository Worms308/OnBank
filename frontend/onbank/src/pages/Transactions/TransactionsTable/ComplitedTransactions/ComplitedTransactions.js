import React from 'react';
import Table from 'shared/Table';

const datatableData = [
  [
    '01.01.2019',
    'Jan Kowalski 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Nowak 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Adamiak 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Testowski 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    `Jan Brostojewski 00 0000 0000 0000 0000 0000 0000`,
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
];

const columns = [
  { name: 'date', label: 'Data' },
  { name: 'account', label: 'Odbiorca/Nadawca' },
  { name: 'description', label: 'Opis operacji' },
  { name: 'type', label: 'Rodzaj operacji' },
  {
    name: 'cost',
    label: 'Kwota operacji',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < '0') {
          return <span style={{ color: '#C0392B' }}>{value}</span>;
        }
        if (value > '0') {
          return <span style={{ color: '#3FD07C' }}>{value}</span>;
        }
      },
    },
  },
  { name: 'saldo', label: 'Saldo' },
];

const ComplitedTransactions = () => <Table data={datatableData} columns={columns} />;

export default ComplitedTransactions;
