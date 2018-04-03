import {fork} from 'redux-saga/effects';
import {getAllTagsFlow} from './adminManagerTagsSaga';
import {get_all_users_flow} from './adminManagerUsersSaga';
import {getArticlesListFlow,getArticleDetailFlow} from './frontSaga';
import {saveArticleFlow} from './adminManagerNewArticleSaga';
import {getArticleListFlow,deleteArticleFlow,editArticleFlow} from './adminManagerArticleSaga';
import {loginFlow,registerFlow,user_auth} from './homeSaga';

export default function* rootSaga() {
    yield fork(getAllTagsFlow);
    yield fork(getArticlesListFlow);
    yield fork(getArticleDetailFlow);
    yield fork(loginFlow);
    yield fork(registerFlow);
    yield fork(user_auth);
    yield fork(get_all_users_flow);
    yield fork(saveArticleFlow);
    yield fork(getArticleListFlow);
    yield fork(deleteArticleFlow);
    yield fork(editArticleFlow);
}