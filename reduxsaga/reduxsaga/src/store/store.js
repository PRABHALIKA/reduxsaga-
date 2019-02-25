import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddlware=createSagaMiddleware();

const store=createStore(rootReducer,applyMiddleware(logger,sagaMiddlware));
sagaMiddlware.run(rootSaga);

export default store;


