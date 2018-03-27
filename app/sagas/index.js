import {fork} from 'redux-saga/effects';
import {getAllTagsFlow} from './adminManagerTagsSaga';
import {getArticleListFlow,getArticleDetailFlow} from './frontSaga';

export default function* rootSaga() {
    yield fork(getAllTagsFlow);
    yield fork(getArticleListFlow);
    yield fork(getArticleDetailFlow);
}