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
      recipientName: 'Jan Kowalski',
      recipientAccountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA',
      operationType: 'CHARGES',
      amount: 32323.21,
      accountBalance: 500,
    },
    {
      id: 2,
      date: '2019-03-01',
      recipientName: 'Onwelo Sp.Z.O.O',
      recipientAccountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA LOREM IPSUM ',
      operationType: 'PRZELEW NA KONTO',
      amount: 32323000.21,
      accountBalance: 0,
    },
  ],
  mockDetailsTransaction: {
    accountBalance: 2400,
    amount: 150,
    createDate: '2019-07-17 20:29:11',
    date: '2019-03-23',
    description: 'Przykładowy przelew z utf-8.',
    operationType: 'NORMAL',
    realizationState: 'REALIZED',
    recipientAccountNumber: 'PL61306662783096158101751159',
    recipientName: 'Mariusz Kowalski',
    senderAccountNumber: 'PL57665182618431955785589025',
    senderName: 'Łukasz Nowak',
  },
};

export default transactions;
