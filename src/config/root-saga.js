import {all, fork} from 'redux-saga/effects';
import HomeScreenSaga from '../scenes/Home/sagas';

export default function* rootSaga() {
  yield all([fork(HomeScreenSaga)]);
}
