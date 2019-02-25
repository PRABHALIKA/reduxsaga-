import  {postsInit} from '../utils/init'; 

const postReducer=(state=postsInit,newData)=>{
      if(newData.type == 'POSTS'){
           state={
               ...state,
               posts:newData.payload
           }
      }

      return state;
}

export default postReducer;