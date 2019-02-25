import userSaga from './userSaga';
import postSaga from './postSaga';
import {all} from 'redux-saga/effects'

function* rootSaga(){
   yield all([
       userSaga(),
       postSaga()
   ])
}

export default rootSaga;