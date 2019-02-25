import {takeLatest,call,put} from 'redux-saga/effects';
import ServerCall from '../services/ServerCall';

function* getPosts(){
    const res=yield call(ServerCall.fnGetReq,'http://jsonplaceholder.typicode.com/posts')
    yield put({
        'type':'POSTS',
        'payload':res.data
    })
}

function* insertPosts(){
}

function* postSaga(){
  yield takeLatest("GP",getPosts);
  yield takeLatest('IP',insertPosts)
}

export default postSaga;