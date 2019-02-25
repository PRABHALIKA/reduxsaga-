import React    from "react";
import template from "./Posts.jsx";
import {connect} from 'react-redux'

class Posts extends React.Component {
  render() {
    return template.call(this);
  }
  fnGetPosts(){
    debugger;
    this.props.d({
       'type':'GP'
    })
  }
}


export default connect(
  (state)=>{
    return {
      'posts':state.postReducer.posts
    }
  },
  (d)=>{
  return{
    'd':d
  }
})(Posts);
