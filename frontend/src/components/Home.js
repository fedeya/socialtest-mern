import React, { Component } from 'react'

import Dashboard from "./Dashboard";
import Login from "./LoginSystem/Login";
import Register from "./LoginSystem/Register";

class Home extends Component {
  render() {
    const { isAuth } = this.props;

    return (
      <div>
        {
          isAuth ? (
            <Dashboard acc={this.props.acc} history={this.props.history}/>
          ) :
          <div>
            <div className="row">
              <div className="col-md">
                <Login auth={this.props.auth} />
              </div>
              <div className="col-md">
                <Register />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Home;