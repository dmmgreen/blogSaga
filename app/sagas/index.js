import {fork} from 'redux-saga/effects';
import {getAllTagsFlow} from './adminManagerTagsSaga';

export default function* rootSaga() {
    yield fork(getAllTagsFlow);
}