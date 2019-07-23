import React, { Component } from 'react';

class Profile extends Component{
  render(){

    const { username, fullName, email } = this.props.acc;

    return (
      <div className="text-center">
        <h1 className="display-3">{fullName}</h1>
        <h3>{username}</h3>
        <p>{email}</p>
      </div>
    )
  }
}

export default Profile;