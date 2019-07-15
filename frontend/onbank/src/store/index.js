import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactions from 'reducers/transactionsReducer';
import userProfile from 'reducers/userProfileReducer';
import operationType from 'reducers/operationTypeReducer';

const store = createStore(
  combineReducers({ userProfile, transactions, operationType }),
  applyMiddleware(thunk),
);

export default store;
