import React    from "react";
import template from "./Users.jsx";
import {connect} from 'react-redux'
class Users extends React.Component {
  render() {
    return template.call(this);
  }
  fnGetUsers(){
    this.props.d({
       'type':'GU'
    })
  }
}


export default connect(
  (state)=>{
    return {
      'users':state.userReducer.users
    }
  },
  (d)=>{
  return{
    'd':d
  }
})(Users);
