import {call, put, takeEvery} from 'redux-saga/effects';
import {Types as ChecklistTypes, toggleCheckbox} from '../../ducks/equipments';
import {getChecklist, completeEquipment} from '../../services/equipments';

function* fetchData() {
  try {
    const response = yield call(getChecklist);
    const normalizedData = yield call(normalizeResponse, response.data);
    yield put({
      type: ChecklistTypes.FETCH_SUCCESS,
      payload: normalizedData,
    });
  } catch (e) {
    console.log(e);
  }
}

function normalizeResponse(checklist) {
  return checklist.map(({name}, index) => ({
    name,
    id: index,
    state: false,
    completed: false,
  }));
}

function* fetchCompleteEquipment(id) {
  const response = yield call(completeEquipment, id);

  if (response.data.success) {
    yield put(toggleCheckbox(id));
  }
}

function* HomeScreenSaga() {
  yield takeEvery(ChecklistTypes.GET_DATA, fetchData);
  yield takeEvery(ChecklistTypes.COMPLETE_EQUIPMENT, fetchCompleteEquipment);
}

export default HomeScreenSaga;
