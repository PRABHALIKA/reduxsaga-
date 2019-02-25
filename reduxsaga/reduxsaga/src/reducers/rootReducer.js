import postReducer from './postReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({postReducer,userReducer});

export default rootReducer;

