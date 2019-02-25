import axios from 'axios';

class ServerCall{
   static fnGetReq(url){
       return axios.get(url);
   }
}

export default ServerCall;