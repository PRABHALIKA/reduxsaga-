import {usersInit} from '../utils/init';

const userReducer=(state=usersInit,newData)=>{
    if(newData.type=='USERS'){
        state={
            ...state,
            users:newData.payload
        }
    }

    return state;
}

export default userReducer;