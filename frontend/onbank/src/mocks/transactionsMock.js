const transactions = {
  mockAccountBar: {
    name: 'Konto na wypasie',
    accountNumber: 'PL00000000000000000000000000',
    blockedFunds: -100,
    availableFunds: 1000,
  },
  mockTransactionList: [
    {
      id: 1,
      date: '2019-01-01',
      receiver: 'Jan Kowalski',
      accountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA',
      typeOfOperation: 'PRZELEW NA KONTO',
      ammount: 32323.21,
      accountBallance: 500,
    },
    {
      id: 2,
      date: '2019-03-01',
      receiver: 'Onwelo Sp.Z.O.O',
      accountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA LOREM IPSUM ',
      typeOfOperation: 'PRZELEW NA KONTO',
      ammount: 32323000.21,
      accountBallance: 10000000,
    },
  ],
};

export default transactions;
