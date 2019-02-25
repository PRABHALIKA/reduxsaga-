import {takeLatest,call,put} from 'redux-saga/effects';
import ServerCall from '../services/ServerCall';

function* getUsers(){
    const res=yield call(ServerCall.fnGetReq,'http://jsonplaceholder.typicode.com/users')
    yield put({
        'type':'USERS',
        'payload':res.data
    })
}


function* userSaga(){
    yield takeLatest('GU',getUsers);
}

export default userSaga;