import {fork} from 'redux-saga/effects';
import {getAllTagsFlow} from './adminManagerTagsSaga';
import {get_all_users_flow} from './adminManagerUsersSaga';
import {getArticleListFlow,getArticleDetailFlow} from './frontSaga';
import {loginFlow,registerFlow,user_auth} from './homeSaga';

export default function* rootSaga() {
    yield fork(getAllTagsFlow);
    yield fork(getArticleListFlow);
    yield fork(getArticleDetailFlow);
    yield fork(loginFlow);
    yield fork(registerFlow);
    yield fork(user_auth);
    yield fork(get_all_users_flow);
}