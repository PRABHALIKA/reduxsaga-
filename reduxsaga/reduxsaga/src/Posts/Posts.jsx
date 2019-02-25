import "./Posts.css";
import React from "react";

function template() {
  return (
    <div className="posts">
      <h1>Posts</h1>
      <input type="button" value="get posts" onClick={this.fnGetPosts.bind(this)} />
     <div> {
        this.props.posts && this.props.posts.length > 0 && JSON.stringify(this.props.posts[0])
      }
      </div>
    </div>
  );
};

export default template;
