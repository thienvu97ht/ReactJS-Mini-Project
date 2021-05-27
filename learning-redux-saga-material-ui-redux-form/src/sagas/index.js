import { fork } from "redux-saga/effects";

function* watchFetchListTaskAction() {}

function* watchCreateTaskAction() {}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
