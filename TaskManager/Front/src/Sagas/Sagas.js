import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as ActionCreators from "../Store/actionCreators.js";

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

function* watchgetProjects(){
    yield takeEvery('getProjectList_ASYNC',getProjects);
}

function* getProjects(action) {
    try {
        const response = yield call(fetch, "https://localhost:44362/projects/all");
        console.log(response);
        let retrievedProjects = yield call([response, response.json]);
        console.log(retrievedProjects);
        //retrievedProjects = retrievedProjects.map((elem) => JSON.parse(elem));
        console.log(retrievedProjects);
        yield put(ActionCreators.projectList(retrievedProjects));
        yield put(ActionCreators.setIsLoadingFlag(false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.setIsLoadingFlag(false));
    }
}


function* rootSaga() {
    yield all([
        watchgetProjects()
    ])
  }

export default rootSaga;