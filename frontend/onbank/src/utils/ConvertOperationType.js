import operationType from 'mocks/operationTypeMock';

const ConvertOperationType = type => {
  switch (type) {
    case operationType.OWN_TRANSFER:
      return 'Transfer własny';
    case operationType.OVERCOMING_TRANSFER:
      return 'OVERCOMING TRANSFER';
    case operationType.INCOMING_TRANSFER:
      return 'INCOMING TRANSFER';
    case operationType.TAX_TRANSFER:
      return 'TAX TRANSFER';
    case operationType.ZUS_TRANSFER:
      return 'ZUS TRANSFER';
    case operationType.BROKERAGE_TRANSFER:
      return 'BROKERAGE TRANSFER';
    case operationType.CREDIT_OPERATION:
      return 'CREDIT OPERATION';
    case operationType.CURRENCY_OPERATION:
      return 'CURRENCY OPERATION';
    case operationType.CASH_PAYMENTS:
      return 'CASH PAYMENTS';
    case operationType.CHARGES:
      return 'Opłaty';
    case operationType.CAPITALIZATION:
      return 'CAPITALIZATION';
    case operationType.OTHERS:
      return 'OTHERS';
    case operationType.NORMAL:
      return 'Standardowy';
    case operationType.INSTANT:
      return 'Natychmiastowy';
    case operationType.REALIZED:
      return 'Zrealizowany';
    case operationType.WAITING:
      return 'Oczekujący';
    case operationType.IN_PROGRESS:
      return 'W trakcie realizacji';
    default:
      return type;
  }
};

export default ConvertOperationType;
