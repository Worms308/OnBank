import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactions from 'reducers/transactionsReducer';
import operationType from 'reducers/operationTypeReducer';

const store = createStore(combineReducers({ transactions, operationType }), applyMiddleware(thunk));

export default store;
