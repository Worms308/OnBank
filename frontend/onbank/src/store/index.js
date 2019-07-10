import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactions from 'reducers/transactionsReducers';

const store = createStore(combineReducers({transactions}), applyMiddleware(thunk));

export default store;
