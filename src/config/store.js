import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MainDuck from './root-duck';
import MainSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(MainDuck, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MainSaga);

export default store;
