import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as ActionCreators from "../Store/actionCreators.js";

const delay = (ms) => new Promise(res => setTimeout(res, ms))


import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as ActionCreators from "../Store/ActionsCreators.js";
import * as utils from "../Scripts/CommonFunctions.js";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

/* SAMPLE
function* requestUnitList(action) {
    try {
        yield put(ActionCreators.SetRetrievedUnits([], true));
        yield delay(2000);
        const retrievedUnits = yield call(utils.GetUnits, action.FactionId);
        yield put(ActionCreators.SetRetrievedUnits(retrievedUnits, false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.SetRetrievedUnits([], false));
    }
}

function* watchRequestUnitList(){
    yield takeEvery('ASYNC_RetrieveUnits',requestUnitList);
}
*/


function* rootSaga() {
    yield all([
        /*
        watchRequestUnitList(),
        watchRequestFactionsList(),
        watchRequestDetachmentsList(),
        watchRequestChapterTacticsList()*/
    ])
  }

export default rootSaga;