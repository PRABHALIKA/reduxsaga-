import "./Users.css";
import React from "react";

function template() {
  return (
    <div className="users">
      <h1>Users</h1>
      <input type="button" value="get users" onClick={this.fnGetUsers.bind(this)} />
     <div> {
        this.props.users && this.props.users.length > 0 && JSON.stringify(this.props.users[0])
      }
      </div>
    </div>
  );
};

export default template;
